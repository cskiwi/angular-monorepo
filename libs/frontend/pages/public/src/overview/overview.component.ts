import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, catchError, map, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  private readonly apollo = inject(Apollo);
  someData$ = this.apollo
    .query<{
      me: {
        id: string;
        name: string;
      };
    }>({
      query: gql`
        query {
          me {
            id
            name
          }
        }
      `,
    })
    .pipe(
      tap((result) => console.log(result.networkStatus)),
      catchError((err) => {
        console.error(err);
        return EMPTY;
      }),
      map((result) => result.data.me),
    );

  data = toSignal(this.someData$);
}
