import { HttpErrorResponse } from '@angular/common/http';

export default class EpicFailError extends HttpErrorResponse {
  status: number;

  constructor(err) {
    super(err);
    this.status = err.status;
  }
}
