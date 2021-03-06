import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/core/shared/shared.service';
import { SkillModel } from 'src/app/core/skill/skill-model';
import { SkillRepository } from 'src/app/core/skill/skill-repository';
import { ProjectModel } from '../core/project-model';
import { ProjectRepository } from '../core/project-repository';
import { ProjectService } from '../core/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

// TODO: VALIDAÇÕES DE CAMPOS
export class AddProjectComponent implements OnInit {

  form: FormGroup;
  skills: SkillModel[] = [];
  op: boolean = true;
  submitted: boolean = false;

  idNgo: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private repository: ProjectRepository,
    private skillRepository: SkillRepository,
    private titleService: Title,
    private router: Router,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setTitle();
    this.initializeSkills();
    this.initializeForm();
    this.navUserType();

    const id = +this.route.snapshot.paramMap.get('id');
    const ong_id = +this.route.snapshot.paramMap.get('id-ong');

    if (id) {
      this.op = false;
      this.loadProject(id);
    }

    if (ong_id) {
      this.form.controls.ong_id.setValue(ong_id);
    }
  }

  navUserType() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);
    this.sharedService._idOng.subscribe(idOng => this.idNgo = idOng);

    if (this.idDev != '' && this.userType.toLowerCase() === 'dev') {
      this.showDevNavBar = true;
    } else if (this.idNgo != '' && this.userType.toLowerCase() === 'ngo') {
      this.showNgoNavBar = true;
    } else {
      this.showVisitorBar = true;
    }
  }

  setTitle() {
    this.titleService.setTitle('Cadastro de Projeto');
  }

  loadProject(id: number) {
    this.repository.getProjectById(id).subscribe(response => {
      this.form.controls.id.setValue(response.id);
      this.form.controls.ong_id.setValue(response.ong.id)
      this.form.controls.title.setValue(response.title)
      this.form.controls.description.setValue(response.description)
      this.form.controls.deadline.setValue(response.deadline)
      this.form.controls.selectedSkills.setValue(response.project_skills)
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      id: [''],
      ong_id: [''],
      title: [''],
      description: [''],
      deadline: [''],
      selectedSkills: ['']
    })
  }

  initializeSkills() {
    this.skillRepository.getAllSkills().subscribe(response => {
      this.skills.push({ id: response.id, description: response.description })
    });
  }

  onSubmit() {
    if (this.form.valid) {

      const project = {
        id: this.form.value.id,
        ong: {
          id: this.form.value.ong_id,
        },
        title: this.form.value.title,
        description: this.form.value.description,
        deadline: this.form.value.deadline,
        project_skills: this.form.value.selectedSkills
      } as ProjectModel;

      if (project.id) {
        this.repository.putProject(project).subscribe(response => {
          this.form.reset()
          this.router.navigateByUrl('/ngo-dashboard')
        });
      } else {
        this.repository.postProject(project).subscribe(response => {
          this.form.reset()
          this.router.navigateByUrl('/project-success')
        });
      }
    }
  }

  onCancel() {
    this.form.reset();
    this.router.navigateByUrl('/ngo-dashboard')
  }

}
