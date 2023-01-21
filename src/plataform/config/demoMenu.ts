import { Menu } from "../../menu/interfaces";

export const getConfig = () => {
    const config: Menu = {
        "menus": [
            {
                "id": "m_club",
                "text_code": "LIT_Club",
                "menus": [
                    {
                        "id": "m_info_club",
                        "text_code": "LIT_Información",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_club",
                        "text_code": "LIT_Gestión",
                        "menus": []
                    }
                ]
            },
            {
                "id": "m_equipos",
                "text_code": "LIT_Equipos",
                "menus": [
                    {
                        "id": "m_info_equipos",
                        "text_code": "LIT_Información",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_equipos",
                        "text_code": "LIT_Gestión",
                        "menus": []
                    }
                ]
            },
            {
                "id": "m_partidos",
                "text_code": "LIT_Partidos",
                "menus": [
                    {
                        "id": "m_info_partidos",
                        "text_code": "LIT_Información",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_partidos",
                        "text_code": "LIT_Gestión",
                        "menus": []
                    }
                ]
            },
            {
                "id": "m_socios",
                "text_code": "LIT_Socios",
                "menus": [
                    {
                        "id": "m_info_socios",
                        "text_code": "LIT_Información",
                        "menus": []
                    },
                    {
                        "id": "m_gestion_socios",
                        "text_code": "LIT_Gestión",
                        "menus": []
                    },
                    {
                        "id": "m_pagos_socios",
                        "text_code": "LIT_Pagos",
                        "menus": []
                    }
                ]
            }
        ]
    }
    return config;
}