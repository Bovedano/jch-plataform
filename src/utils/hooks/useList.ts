import { useState } from "react";

interface TList<T> {
    item: T,
    selected: boolean,
    index: number,
    nextItem: TList<T> | undefined,
    prevItem: TList<T> | undefined,
    select: (only?: boolean) => void,
    unselect: () => void,
    toggleSelect: (only?: boolean) => void,
    remove: () => void,
    addNext: (nextItem: T) => void,
    addPrev: (nextItem: T) => void,
    move: (position: number) => void,
    swap: (position: number) => void,
    updateItem: (item: T) => void
}

//elementos que se calculan cada vez que se actualiza la lista
const defaultItem = {
    index: 0,
    nextItem: undefined,
    prevItem: undefined,
    select: () => { },
    unselect: () => { },
    toggleSelect: () => { },
    remove: () => { },
    addNext: () => { },
    addPrev: () => { },
    move: () => { },
    swap: () => { },
    updateItem: () => { }
}

export function useList<T>(initValue?: Array<T>) {



    /* ----------------------------------------------- FUNCTIONS COMMONS  ----------------------------------------------- */
    const initList = (initValue?: Array<T>) => {
        if (initValue) {
            return mapList(initValue.map(item => ({
                selected: false,
                item: item,
                ...defaultItem
            })))
        } else {
            return []
        }
    }


    const exists = (tlist: Array<TList<T>>, index: number) => {
        return (tlist && index >= 0 && index < tlist.length);
    }


    const getItem = (tlist: Array<TList<T>>, index: number) => {
        if (exists(tlist, index)) {
            return tlist[index]
        }
        return undefined
    }

    const getFirst = (tlist: Array<TList<T>>) => {
        if (tlist && tlist.length > 0) {
            return tlist[0];
        }
        return undefined
    }

    const getLast = (tlist: Array<TList<T>>) => {
        if (tlist && tlist.length > 0) {
            return tlist[tlist.length - 1];
        }
        return undefined
    }

    /* ----------------------------------------------- FUNCTIONS SELECTIONS  ----------------------------------------------- */


    const getSelections = (tlist: Array<TList<T>>) => {
        const selecteds = tlist.filter(item => item.selected)
        return selecteds.map(item => item.index)
    }


    const isSelected = (tlist: Array<TList<T>>, index: number) => {
        const item = getItem(tlist, index);
        return (item && item.selected)
    }

    const calcOnlySelection = (item: TList<T>, index: number, only?: boolean) => {
        if (!!only) {
            return item.index === index;
        } else {
            return (item.selected) || item.index === index;
        }
    }

    const select = (tlist: Array<TList<T>>, index: number, only?: boolean) => {
        const newTlist = tlist.map(item => {
            return {
                item: item.item,
                selected: calcOnlySelection(item, index, only),
                ...defaultItem
            }
        });
        return newTlist
    }

    const unselect = (tlist: Array<TList<T>>, index: number) => {
        const newTlist = tlist.map(item => {
            return {
                item: item.item,
                selected: item.selected && item.index !== index,
                ...defaultItem
            }
        });
        return newTlist;
    }

    const toggleSelect = (tlist: Array<TList<T>>, index: number, only?: boolean) => {
        if (exists(tlist, index) && isSelected(tlist, index)) {
            return unselect(tlist, index)
        }
        if (exists(tlist, index) && !isSelected(tlist, index)) {
            return select(tlist, index, only)
        }
        return undefined
    }

    const selectAll = (tlist: Array<TList<T>>) => {
        return tlist.map(item => {
            return {
                selected: true,
                item: item.item,
                ...defaultItem
            }
        })
    }

    const unselectAll = (tlist: Array<TList<T>>) => {
        return tlist.map(item => {
            return {
                selected: false,
                item: item.item,
                ...defaultItem
            }
        })
    }

    const removeSelecteds = (tlist: Array<TList<T>>) => {
        const newTlist = removeMultiple(tlist, getSelections(tlist))
        return newTlist;
    }

    /* ----------------------------------------------- FUNCTIONS STRUCTURE  ----------------------------------------------- */


    const insert = (tlist: Array<TList<T>>, index: number, item: TList<T>) => {
        const newTlist: Array<TList<T>> = [];
        for (let i = 0; i < tlist.length; i++) {
            if (i == index) {
                newTlist.push({
                    item: item.item,
                    selected: item.selected,
                    ...defaultItem
                })
            }
            newTlist.push(tlist[i])
        }
        return newTlist;
    }



    const remove = (tlist: Array<TList<T>>, index: number) => {
        const newTlist = tlist.filter(item => item.index != index);
        return newTlist;
    }



    const addNext = (tlist: Array<TList<T>>, index: number, nextItem: T) => {
        const newTlist: Array<TList<T>> = [];
        for (let i = 0; i < tlist.length; i++) {
            newTlist.push(tlist[i])
            if (i == index) {
                newTlist.push({
                    item: nextItem,
                    selected: false,
                    ...defaultItem
                })
            }
        }
        return newTlist;
    }

    const addPrev = (tlist: Array<TList<T>>, index: number, nextItem: T) => {
        const newTlist: Array<TList<T>> = [];
        for (let i = 0; i < tlist.length; i++) {
            if (i == index) {
                newTlist.push({
                    item: nextItem,
                    selected: false,
                    ...defaultItem
                })
            }
            newTlist.push(tlist[i])
        }
        return newTlist;
    }


    const move = (tlist: Array<TList<T>>, index: number, toIndex: number) => {
        const item = getItem(tlist, index);
        if (item) {
            const newTlist: Array<TList<T>> = remove(tlist, index);
            const insertedTList: Array<TList<T>> = insert(newTlist, toIndex, item);
            return insertedTList;
        }
        return tlist;
    }

    const removeMultiple = (tlist: Array<TList<T>>, indexes: Array<number>) => {
        const newTlist: Array<TList<T>> = [];
        for (let i = 0; i < tlist.length; i++) {
            if (!indexes.includes(i)) {
                newTlist.push(tlist[i])
            }
        }
        return newTlist;
    }

    const swap = (tlist: Array<TList<T>>, index: number, toIndex: number) => {
        const item1 = getItem(tlist, index);
        const item2 = getItem(tlist, toIndex);
        if (item1 && item2) {

            const newTlist: Array<TList<T>> = [];
            for (let i = 0; i < tlist.length; i++) {
                if (i == item1.index) {
                    newTlist.push(item2)
                } else if (i == item2.index) {
                    newTlist.push(item1)
                } else {
                    newTlist.push(tlist[i])
                }
            }
            return newTlist
        }
        return tlist;
    }



    const removeByFilter = (tlist: Array<TList<T>>, filter: (item: TList<T>) => boolean) => {
        const filterList = tlist.filter(filter);
        const indexes = filterList.map(item => item.index);
        const removedList = removeMultiple(tlist, indexes);
        return removedList;
    }

    const updateItem = (tlist: Array<TList<T>>, index: number, item: T) => {
        const newTlist: Array<TList<T>> = [];
        for (let i = 0; i < tlist.length; i++) {
            if (i == index) {
                newTlist.push({
                    selected: tlist[i].selected,
                    item: item,
                    ...defaultItem
                })
            } else {
                newTlist.push(tlist[i])
            }
        }
        return newTlist;
    }


    /* ----------------------------------------------- UPDATE LIST  ----------------------------------------------- */

    const setList = (tlist: Array<TList<T>> | undefined) => {
        if (tlist) {
            setTList(mapList(tlist))
        }
    }

    const mapList = (tlist: Array<TList<T>>) => {
        let prevItem: TList<T> | undefined = undefined;
        for (let i = 0; i < tlist.length; i++) {
            tlist[i].index = i;
            //FUNCIONES
            tlist[i].remove = () => {
                setList(remove(tlist, i))
            }
            tlist[i].select = (only?: boolean) => {
                setList(select(tlist, i, only))
            }
            tlist[i].unselect = () => {
                setList(unselect(tlist, i))
            }
            tlist[i].toggleSelect = (only?: boolean) => {
                setList(toggleSelect(tlist, i, only))
            }
            tlist[i].addNext = (nextItem: T) => {
                setList(addNext(tlist, i, nextItem))
            }
            tlist[i].addPrev = (nextItem: T) => {
                setList(addPrev(tlist, i, nextItem))
            }
            tlist[i].move = (position: number) => {
                setList(move(tlist, i, position))
            }
            tlist[i].swap = (position: number) => {
                setList(swap(tlist, i, position))
            }
            tlist[i].updateItem = (item: T) => {
                setList(updateItem(tlist, i, item))
            }
            // REFERENCIAS 
            //Se resetean las referencias
            tlist[i].prevItem = undefined;
            tlist[i].nextItem = undefined;
            //Enlace con el elemento anterior
            if (prevItem) {
                prevItem.nextItem = tlist[i];
                tlist[i].prevItem = prevItem;
            }
            //Actualizacion del elemento anterior
            prevItem = tlist[i];
        }

        return tlist;
    }

    const add = (tlist: Array<TList<T>>, item: T) => {
        const newItem: TList<T> = {
            item: item,
            selected: false,
            ...defaultItem,
        }

        const newList: Array<TList<T>> = [...tlist, newItem];
        return newList;
    }

    const clear = () => {
        return [];
    }

    /* ----------------------------------------------- DATA  ----------------------------------------------- */

    const [tlist, setTList] = useState<Array<TList<T>>>(initList(initValue));


    /* ----------------------------------------------- EXTRA DATA  ----------------------------------------------- */
    const size = tlist.length;
    const first = getFirst(tlist);
    const last = getLast(tlist)
    const selecteds = tlist.filter(item => item.selected)

    /* ----------------------------------------------- EXPORT MAPPING  ----------------------------------------------- */

    const c_add = (item: T) => {
        setList(add(tlist, item));
    }

    const c_clear = () => {
        setList(clear());
    }

    const c_selectAll = () => {
        setList(selectAll(tlist));
    }

    const c_unselectAll = () => {
        setList(unselectAll(tlist));
    }

    const c_removeSelecteds = () => {
        setList(removeSelecteds(tlist))
    }

    const c_removeByFilter = (filter: (item: TList<T>) => boolean) => {
        setList(removeByFilter(tlist, filter))
    }

    const c_updateItem = (index: number, item: T) => {
        setList(updateItem(tlist, index, item))
    }

    const c_removeItem = (index: number) => {
        setList(remove(tlist, index))
    }

    const c_insertItem = (index: number, item: T) => {
        setList(insert(tlist, index, {
            item: item,
            selected: false,
            ...defaultItem
        }))
    }

    return {
        list: tlist,
        first,
        last,
        size,
        selecteds,
        add: c_add,
        clear: c_clear,
        selectAll: c_selectAll,
        unselectAll: c_unselectAll,
        removeSelecteds: c_removeSelecteds,
        removeByFilter: c_removeByFilter,
        updateItem: c_updateItem,
        removeItem: c_removeItem,
        insertItem: c_insertItem
    }
}