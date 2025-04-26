const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const depositRoutes = require('./routes/depositRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const { secureHeaders } = require('./middleware/securityMiddleware');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(secureHeaders);

// Routes
app.use('/api/deposits', depositRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;
