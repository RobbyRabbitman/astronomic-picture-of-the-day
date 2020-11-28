import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { GITHUB_URI, GITHUB_URI_TITLE } from './token';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubComponent {
  @Input() color: string;
  constructor(
    @Inject(GITHUB_URI) public readonly uri: string,
    @Inject(GITHUB_URI_TITLE) @Optional() public readonly title: string
  ) {}
}
