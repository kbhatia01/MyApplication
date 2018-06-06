import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyMaterialPage } from './study-material';

@NgModule({
  declarations: [
    StudyMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyMaterialPage),
  ],
})
export class StudyMaterialPageModule {}
