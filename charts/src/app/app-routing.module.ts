import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './components/line-chart/line-chart.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent },
  { path: '**', redirectTo: 'line-chart' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
