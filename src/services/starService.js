/**
 * Created by ranyanchuan on 2018/3/11.
 */
import { request } from '../utils/request';
import { api } from '../utils/config';

export async function getStar(payload) {
  return request(api.getStar.replace(':category', 'basketball'), {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
