export class SecurityListConfig {
  type = 'all';

  filters: {
    modeL_NAME?: string,
    limit?: number,
    offset?: number
  } = {};
}