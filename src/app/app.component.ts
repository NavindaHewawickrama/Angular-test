import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from "./board/board.component";
import {NbThemeModule} from '@nebular/theme';
import { NbLayoutModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent, BoardComponent, NbThemeModule,NbLayoutModule,  NbButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
}
