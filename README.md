# API Ecuador

API de código abierto que proporciona información detallada sobre Ecuador, incluyendo datos del país, sus fronteras, idiomas, regiones, provincias, cantones y parroquias.

## Instalación

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- Node
- MySQL

### Clonar el repositorio

```bash
  git clone https://github.com/7R0N1X/api-ecuador.git
  cd api-ecuador/backend
```

### Instalar dependencias

```bash
  npm install
```

### Configurar variables de entorno

Renombrar .env.example a .env y completar los valores:

```bash
  PORT=3000
  DB_HOST=localhost
  DB_USER=user
  DB_PASSWORD=password
  DB_NAME=api_ecuador
```

### Iniciar el servidor

```bash
  npm run dev
```

La API estará disponible en http://localhost:3000.

## Endpoints

### Información General

| Método | Endpoint                          | Descripción          | Acciones                                                                                                                            |
| ------ | --------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/v1/country/ecuador           | Información del país | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador" target="_blank" rel="noopener noreferrer">Probar</a>              |
| GET    | /api/v1/country/ecuador/borders   | Fronteras de Ecuador | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador/borders" target="_blank" rel="noopener noreferrer">Probar</a>      |
| GET    | /api/v1/country/ecuador/languages | Lista de idiomas     | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador/languages" target="_blank" rel="noopener noreferrer">Probar</a>    |

### División Administrativa

| Método | Endpoint                          | Descripción          | Acciones                                                                                                                            |
| ------ | --------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/v1/country/ecuador/regions   | Lista de regiones   | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador/regions" target="_blank" rel="noopener noreferrer">Probar</a>       |
| GET    | /api/v1/country/ecuador/provinces | Lista de provincias | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador/provinces" target="_blank" rel="noopener noreferrer">Probar</a>     |
| GET    | /api/v1/country/ecuador/cantons   | Lista de cantones   | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador/cantons" target="_blank" rel="noopener noreferrer">Probar</a>       |
| GET    | /api/v1/country/ecuador/parishes  | Lista de parroquias | <a href="https://api-ecuador.onrender.com/api/v1/country/ecuador/parishes" target="_blank" rel="noopener noreferrer">Probar</a>      |

## Tecnologías Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## Licencia

Este proyecto es de código abierto bajo la [licencia MIT](https://github.com/7R0N1X/api-ecuador/blob/main/LICENSE).
