import { Router, Request, Response } from 'express';
import PointViewsRepository from '../../typeorm/repositories/PointViewsRepository';

const viewsRouter = Router();

viewsRouter.post('/', async (request: Request, response: Response) => {
  const { point_id } = request.body;

  const pointViewsRepository = new PointViewsRepository();

  await pointViewsRepository.createView(point_id);

  const views = await pointViewsRepository.getNumberOfViews(point_id);

  return views;
});

export default viewsRouter;