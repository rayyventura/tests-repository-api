import Joi from "joi";
export interface CreateTest {
  title: string;
  pdfUrl: string;
  categoryId: number;
  disciplineId: number;
  teacherId: number;
}
const testSchema = Joi.object({
  title: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().integer().required(),
  disciplineId: Joi.number().integer().required(),
  teacherId: Joi.number().integer().required(),
});
export default testSchema;
