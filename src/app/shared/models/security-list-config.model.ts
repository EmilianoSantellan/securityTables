export class SecurityListConfig {
  type = 'all';

  filters: {
    modelName?: string,
    limit?: number,
    offset?: number
  } = {};
}