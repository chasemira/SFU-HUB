import cors from 'cors';
import express, { type ErrorRequestHandler } from 'express';
import swaggerUi, { type JsonObject } from 'swagger-ui-express';
import fs from 'fs';
import * as OpenApiValidator from 'express-openapi-validator';
import someRoute from './routes/someRoute.js';

// import { jwtDecode } from "jwt-decode";

const app = express();
const port = process.env['PORT'] ?? 3005;

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
const openApiDocument = fs.readFileSync('./api/openapi.json', 'utf-8');
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(JSON.parse(openApiDocument) as JsonObject),
);
app.get('/openapi', (_req, res) => res.sendFile('../api/openapi.json'));

app.use(
    OpenApiValidator.middleware({
        apiSpec: './api/openapi.json',
        validateRequests: true, // (default)
        validateResponses: false, // false by default
        validateSecurity: false,
    }),
);

app.use('/someRoute', someRoute);

app.use(((err, _req, res) => {
    // format error
    res.status((err.status as number) || 500).json({
        message: err.message,
        errors: err.errors,
    });
}) as ErrorRequestHandler);

app.listen(port, () => console.log(`API Magic happening on port ${port}`));
