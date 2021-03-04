import { TokenDTO } from '../../../../models/types/dto';
import logger from '@config/logger';

class GetTokenService {
  private baseToken = require('base-64');

  public exec({ args1, args2 }: TokenDTO) {
    const service = `Token`;
    logger.geral.info({
      service,
      message: 'INFO',
      data: 'Started to request a token',
    });
    try {
      const token = this.baseToken.encode(args1, args2);
      logger.geral.info({
        service,
        message: 'SUCCESS',
        data: token,
      });
      return token;
    } catch (error) {
      logger.geral.error({
        service,
        message: 'ERROR',
        data: error,
      });
      return null;
    }
  }
}

export default new GetTokenService();
