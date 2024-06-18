import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Express, NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function services(): string {
  return 'services';
}

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./apps/asif/src/app/**/**/*.ts'],
};


const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api/admin/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};


const optionsUsers = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./apps/users/src/app/**/**/*.ts'],
};


const swaggerSpecUsers = swaggerJSDoc(optionsUsers);

export function setupSwaggerUsers(app: Express) {
  app.use('/api/users/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecUsers));
};


export function validationMiddleware(dtoType: any) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body) {
        // Transform request body to DTO object
        const dto = plainToClass(dtoType, req.body);

        // Validate DTO object
        const errors = await validate(dto);

        // If validation fails, send 400 Bad Request response
        if (errors.length > 0) {
          const errorMessages = errors.map(error => Object.values(error.constraints)).flat();
          return res.status(400).json({ errors: errorMessages });
        }
      }
      next(); // Continue to next middleware or route handler
    } catch (error) {
      next(error); // Pass error to error handling middleware
    }
  };
}


export function getJWTToken(userId: string, sub: string): string {
  const expiresInMinutes = process.env.JWT_EXPIRE;
  const expirationTimeInSeconds = parseInt(expiresInMinutes) * 60;

  const token = jwt.sign({ id: userId, sub: sub }, process.env.JWT_SECRET, { expiresIn: expirationTimeInSeconds });

  return token

}


export function slugify(text: string): string {
  text = text.replace(/[^\p{L}\d]+/gu, '-');
  text = text.normalize('NFKD').replace(/[\u0300-\u036F]/g, '');
  text = text.replace(/[^-\w]+/g, '');
  text = text.replace(/-+/g, '-');
  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return 'n-a';
  }
  return text;
}


export const ImageExtensions = ["JPG", "PNG", "JPEG", "jpg", "png", "jpeg"];

