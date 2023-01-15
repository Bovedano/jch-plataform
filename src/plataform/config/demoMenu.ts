import { Menu } from "../../menu/interfaces";

export const getConfig = () => {
    const config: Menu = {
        "id": null,
        "name": "ROOT",
        "url": null,
        "menus": [
            {
                "id": "m_club",
                "name": "LIT_Club",
                "url": "/club",
                "menus": [
                    {
                        "id": "m_info_club",
                        "name": "LIT_Información",
                        "url": "/infoclub",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_club",
                        "name": "LIT_Gestión",
                        "url": "/gestionclub",
                        "menus": []
                    }
                ]
            },
            {
                "id": "m_equipos",
                "name": "LIT_Equipos",
                "url": "/equipos",
                "menus": [
                    {
                        "id": "m_info_equipos",
                        "name": "LIT_Información",
                        "url": "/infosequipos",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_equipos",
                        "name": "LIT_Gestión",
                        "url": "/gestionequipos",
                        "menus": []
                    }
                ]
            },
            {
                "id": "m_partidos",
                "name": "LIT_Partidos",
                "url": "/partidos",
                "menus": [
                    {
                        "id": "m_info_partidos",
                        "name": "LIT_Información",
                        "url": "/infopartidos",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_partidos",
                        "name": "LIT_Gestión",
                        "url": "/gestionpartidos",
                        "menus": []
                    }
                ]
            },
            {
                "id": "m_socios",
                "name": "LIT_Socios",
                "url": "/socios",
                "menus": [
                    {
                        "id": "m_info_socios",
                        "name": "LIT_Información",
                        "url": "/infosocios",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_socios",
                        "name": "LIT_Gestión",
                        "url": "/gestionsocios",
                        "menus": []
                    },
                    {
                        "id": "m_pagos_socios",
                        "name": "LIT_Pagos",
                        "url": "/pagossocios",
                        "menus": []
                    }
                ]
            }
        ]
    }
    return config;
}