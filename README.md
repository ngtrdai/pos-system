# POS System

This is a Point of Sale (POS) System built with NestJS, NextJS and PostgreSQL.

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- Node.js
- Docker
- Docker Compose

## Getting Started

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ngtrdai/pos-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pos-system
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the PostgreSQL database using Docker Compose:

   ```bash
   docker-compose up -d
   ```

5. Set up the database schema:

   ```bash
   npm run migrate:run
   ```

6. Start the application:

   ```bash
   npm run start:dev
   ```

7. Access the POS System in your browser at `http://localhost:3000`.

## Usage

- Use the POS System to manage your sales, inventory, and customers.
- Refer to the API documentation for detailed information on the available endpoints.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
