import supertest, { SuperTest, Test, Response } from 'supertest';

import { CustomServer } from '../core/CustomServer';
import { ImageRouter } from '../Routes/ImageRouter';

const request: SuperTest<Test> = supertest(
   new CustomServer().route(new ImageRouter())
);

describe('Get Instructions', (): void => {
   describe('instruction Endpoint =>  /', (): void => {
      it('GET /', async (): Promise<void> => {
         const response: Response = await request.get('/');

         expect(response.status).toBe(200);
      });
   });

   describe("Image doesn't Exist", () => {
      it('GET /images', async (): Promise<void> => {
         const response: Response = await request.get('/images');

         expect(response.status).toBe(404);
      });
   });

   describe('Get Full Image', () => {
      it('GET /images?filename=fjord', async (): Promise<void> => {
         const response: Response = await request.get('/images?filename=fjord');

         expect(response.status).toBe(200);
      });
   });

   describe('Get Resized Image', () => [
      it('GET /images?filename=fjord&width=300&height=300', async () => {
         const response: Response = await request.get(
            '/images?filename=fjord&width=300&height=300'
         );

         expect(response.status).toBe(200);
      })
   ]);
});
