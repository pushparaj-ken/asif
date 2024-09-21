export class APIResponseService {
  async apiFailResponse(res: any, message: string, data = null, status = 201) {
    return res.status(status).json({
      success: false,
      message,
      data,
    });
  }

  async apiSuccessResponse(res: any, data: any, message = 'Success', status = 200) {
    return res.status(status).json({
      success: true,
      message,
      data,
    });
  }
}
