import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// TODO: Implement authentication middleware
// - Validate Cognito JWT tokens
// - Extract user info from token (sub, email)

// TODO: Implement routes
// - GET /profile - Get user profile
// - PUT /profile - Update user profile
// - GET /system/secret - Return SSM injected secret

// TODO: Implement database connection
// - Use pg library to connect to RDS
// - Create connection pool
// - Handle connection errors

// TODO: Implement services
// - ProfileService: CRUD operations for user_profiles table
// - SecretService: Access the injected SSM secret

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
