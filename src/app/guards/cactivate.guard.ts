import { CanActivateFn } from '@angular/router';

export const cactivateGuard: CanActivateFn = (route, state) => {
  return true;
};
