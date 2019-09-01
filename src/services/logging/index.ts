import logger from 'loglevel';

const defaultLogger = logger.getLogger("vue-example")

defaultLogger.setLevel('debug');
defaultLogger.setDefaultLevel('debug');

export default defaultLogger