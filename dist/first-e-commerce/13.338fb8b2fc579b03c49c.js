(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4+IK":function(t,e,r){"use strict";r.r(e),r.d(e,"AccountModule",function(){return C});var o=r("ofXK"),n=r("tyNb"),a=r("fXoL"),i=r("f4AX"),s=r("5eHb");let c=(()=>{class t{constructor(t,e,r){this.userService=t,this.toastr=e,this.location=r}canActivate(t,e){return!this.userService.getToken("token")||(setTimeout(()=>{this.location.back(),this.toastr.warning(" You are already logged in!!","Warning:",{closeButton:!0,onActivateTick:!0})},2500),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(i.a),a.Wb(s.b),a.Wb(o.i))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(t,e,r){this.userService=t,this.toastr=e,this.router=r}canActivate(t,e){return!this.userService.getToken("token")||(setTimeout(()=>{this.router.navigate(["website/account/user/dashboard"]).then(t=>{console.log("Navigation response: ",t),this.toastr.success("Navigation to User Dashboard Page was successfull!!","Success:",{closeButton:!0,onActivateTick:!0})},t=>{console.log(t),this.toastr.error(t.message?""+t.message:""+t,"Error: Navigation to User Dashboard Page was Unsuccessful!!",{closeButton:!0})})},2500),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(i.a),a.Wb(s.b),a.Wb(n.c))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r("3Pt+"),b=r("Wp6s"),u=r("kmnG"),g=r("qFsG"),d=r("bSwM"),f=r("bTqV");function p(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("email-required")," ")}}function h(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("email-invalid")," ")}}function w(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("pass-required")," ")}}function x(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("pass-minlength")," ")}}let v=(()=>{class t{constructor(t,e,r){this.formBuilder=t,this.userService=e,this.toastr=r,this.loginBox={mainHeading:"Login",emailLabel:"Enter your email",passLabel:"Enter your password",forgrotPass:"Forgot your password?",buttonName:"Login",color:"primary"}}ngOnInit(){this.createForm()}createForm(){this.loginForm=this.formBuilder.group({email:["",[l.q.required,l.q.email]],password:["",[l.q.required,l.q.minLength(6)]]})}getError(t){switch(t){case"email-required":return"Email required";case"email-invalid":return"Email is not valid";case"pass-required":return"Password required";case"pass-minlength":return"Password should contain 6 characters";default:return""}}onLogin(){this.loginForm.valid?this.userService.loginUser(this.loginForm.value):(console.log("Enter valid information!!"),this.toastr.warning("Enter valid information!!","Warning:",{closeButton:!0}))}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(l.c),a.Mb(i.a),a.Mb(s.b))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-login"]],decls:26,vars:11,consts:[[1,"card-wrapper"],[1,"card"],[1,"form-container"],[1,"form",3,"formGroup","ngSubmit"],["form","ngForm"],["appearance","fill",1,"form-element"],["type","email","matInput","","placeholder","Email","formControlName","email"],[4,"ngIf"],["type","password","matInput","","placeholder","Password","formControlName","password"],["rel","nofollow","href","#","onclick","showRecoverPasswordForm();return false;",1,"forgot-pass"],[1,"form-element","login-button-wrapper"],[1,"checkbox",3,"color"],["mat-flat-button","","type","submit",1,"button","button-m"]],template:function(t,e){if(1&t&&(a.Sb(0,"div",0),a.Sb(1,"mat-card",1),a.Sb(2,"h2"),a.Jc(3),a.Rb(),a.Sb(4,"div",2),a.Sb(5,"form",3,4),a.Zb("ngSubmit",function(){return e.onLogin()}),a.Sb(7,"mat-label"),a.Jc(8),a.Rb(),a.Sb(9,"mat-form-field",5),a.Nb(10,"input",6),a.Ic(11,p,2,1,"mat-error",7),a.Ic(12,h,2,1,"mat-error",7),a.Rb(),a.Sb(13,"mat-label"),a.Jc(14),a.Rb(),a.Sb(15,"mat-form-field",5),a.Nb(16,"input",8),a.Ic(17,w,2,1,"mat-error",7),a.Ic(18,x,2,1,"mat-error",7),a.Rb(),a.Sb(19,"a",9),a.Jc(20),a.Rb(),a.Sb(21,"div",10),a.Sb(22,"mat-checkbox",11),a.Jc(23,"Remember me"),a.Rb(),a.Sb(24,"button",12),a.Jc(25),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&t){const t=a.tc(6);a.Ab(3),a.Kc(e.loginBox.mainHeading),a.Ab(2),a.jc("formGroup",e.loginForm),a.Ab(3),a.Kc(e.loginBox.emailLabel),a.Ab(3),a.jc("ngIf",e.loginForm.get("email").hasError("required")&&t.submitted),a.Ab(1),a.jc("ngIf",e.loginForm.get("email").hasError("email")&&t.submitted),a.Ab(2),a.Kc(e.loginBox.passLabel),a.Ab(3),a.jc("ngIf",e.loginForm.get("password").hasError("required")&&t.submitted),a.Ab(1),a.jc("ngIf",e.loginForm.get("password").hasError("minlength")&&t.submitted),a.Ab(2),a.Kc(e.loginBox.forgrotPass),a.Ab(2),a.jc("color",e.loginBox.color),a.Ab(3),a.Lc(" ",e.loginBox.buttonName," ")}},directives:[b.a,l.r,l.m,l.g,u.f,u.c,g.a,l.b,l.l,l.f,o.m,d.a,f.a,u.b],styles:[".card-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fafafa}.card[_ngcontent-%COMP%]{padding:15px;width:-webkit-max-content;width:max-content;margin:4em auto 3em}.form-container[_ngcontent-%COMP%]{padding:10px}.form[_ngcontent-%COMP%]{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}h2[_ngcontent-%COMP%]{font-size:24px;font-weight:500;padding-left:0;padding-bottom:8px;border-bottom:1px solid #ebebeb;margin:10px 32px 0 10px}.form-element[_ngcontent-%COMP%]{padding:5px 0 0 2px;width:100%;font-size:14px}.button[_ngcontent-%COMP%]{background:#292929;padding:0 40px;text-transform:uppercase;font-size:12px;color:#fff;font-weight:500;letter-spacing:.025em;border-radius:0;height:44px}@media (min-width:480px){.form[_ngcontent-%COMP%]{max-width:400px}}.card-wrapper[_ngcontent-%COMP%]{height:100vh}.forgot-pass[_ngcontent-%COMP%]{color:#007bff;text-decoration:none}.login-button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.checkbox[_ngcontent-%COMP%]{padding:1em 0}@media (min-width:480px){.login-button-wrapper[_ngcontent-%COMP%]{flex-wrap:nowrap}.login-button-wrapper[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{padding:0}}"]}),t})();var S=r("7dP1");function R(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("first-name")," ")}}function A(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("first-name-invalid")," ")}}function E(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("last-name")," ")}}function N(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("last-name-invalid")," ")}}function L(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("email-required")," ")}}function q(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("email-invalid")," ")}}function y(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("pass-required")," ")}}function P(t,e){if(1&t&&(a.Sb(0,"mat-error"),a.Jc(1),a.Rb()),2&t){const t=a.dc();a.Ab(1),a.Lc(" ",t.getError("pass-minlength")," ")}}const I=[{path:"",component:(()=>{class t{constructor(t,e,r,o,n){this.formBuilder=t,this.userService=e,this.authService=r,this.router=o,this.toastr=n,this.registerBox={mainHeading:"Register",firstNameLabel:"Enter your First Name",lastNameLabel:"Enter your Last Name",emailLabel:"Enter your email",passLabel:"Enter password",buttonName:"Register",buttonLink:"/home"}}ngOnInit(){this.createForm()}createForm(){this.registerForm=this.formBuilder.group({firstName:["",[l.q.required,l.q.pattern("[^ ][a-zA-Z,' .-]{2,49}")]],lastName:["",[l.q.required,l.q.pattern("[^ ][a-zA-Z,' .-]{2,49}")]],email:["",[l.q.required,l.q.email]],password:["",[l.q.required,l.q.minLength(6)]]})}onRegister(){console.log(this.registerForm.value),this.checkDuplicate(this.registerForm.value)}getError(t){switch(t){case"first-name":return"First Name required";case"first-name-invalid":return"Enter valid characters(min-3 max-50) in First Name";case"last-name":return"Last Name required";case"last-name-invalid":return"Enter valid characters(min-3 max-50) in Last Name";case"email-required":return"Email required";case"email-invalid":return"Email is not valid";case"pass-required":return"Password required";case"pass-minlength":return"Password must contain minimum 6 characters";default:return""}}checkDuplicate(t){this.authService.checkExistingUser(t).subscribe(t=>{t?(console.log("User already exists!!"),this.toastr.warning("User already exists!!","Warning:")):this.userRegistration()},t=>{console.log(t),this.toastr.error(t.message?""+t.message:""+t,"Error: Checking user not successful!!",{closeButton:!0})})}userRegistration(){this.registerForm.valid?(this.user=this.registerForm.value,this.userService.registerUser(this.user).subscribe(t=>{console.log("Registration successfull\nNow login to access your profile!!"),this.toastr.success("Registration successfull\nNow login to access your profile!!","Success:",{closeButton:!0}),setTimeout(()=>{this.router.navigate(["website/account/login"]).then(t=>{console.log("Navigation response: ",t),this.toastr.success("Navigation to Login Page was successfull!!","Success:",{closeButton:!0,onActivateTick:!0})},t=>{console.log(t),this.toastr.error(t.message?""+t.message:""+t,"Error: Navigation to Login Page was Unsuccessful!!",{closeButton:!0})})},2500)},t=>{console.log(t),this.toastr.error(t.message?""+t.message:""+t,"Error: Registration not successful!!",{closeButton:!0})})):(console.log("Enter valid information!!"),this.toastr.warning("Enter valid information!!","Warning:",{closeButton:!0}))}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(l.c),a.Mb(i.a),a.Mb(S.a),a.Mb(n.c),a.Mb(s.b))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-register"]],decls:39,vars:15,consts:[[1,"card-wrapper"],[1,"card"],[1,"form-container"],[1,"form",3,"formGroup","ngSubmit"],["form","ngForm"],["appearance","fill",1,"form-element"],["type","text","matInput","","placeholder","First Name","formControlName","firstName"],[4,"ngIf"],["type","text","matInput","","placeholder","Last Name","formControlName","lastName"],["type","email","matInput","","placeholder","Email","formControlName","email"],["type","password","matInput","","placeholder","Password","formControlName","password"],[1,"form-element"],["mat-flat-button","","type","submit",1,"button","button-m"],[1,"login-button-wrapper"],["mat-flat-button","","type","button","routerLink","login",1,"button","button-m"]],template:function(t,e){if(1&t&&(a.Sb(0,"div",0),a.Sb(1,"mat-card",1),a.Sb(2,"h2"),a.Jc(3),a.Rb(),a.Sb(4,"div",2),a.Sb(5,"form",3,4),a.Zb("ngSubmit",function(){return e.onRegister()}),a.Sb(7,"mat-label"),a.Jc(8),a.Rb(),a.Sb(9,"mat-form-field",5),a.Nb(10,"input",6),a.Ic(11,R,2,1,"mat-error",7),a.Ic(12,A,2,1,"mat-error",7),a.Rb(),a.Sb(13,"mat-label"),a.Jc(14),a.Rb(),a.Sb(15,"mat-form-field",5),a.Nb(16,"input",8),a.Ic(17,E,2,1,"mat-error",7),a.Ic(18,N,2,1,"mat-error",7),a.Rb(),a.Sb(19,"mat-label"),a.Jc(20),a.Rb(),a.Sb(21,"mat-form-field",5),a.Nb(22,"input",9),a.Ic(23,L,2,1,"mat-error",7),a.Ic(24,q,2,1,"mat-error",7),a.Rb(),a.Sb(25,"mat-label"),a.Jc(26),a.Rb(),a.Sb(27,"mat-form-field",5),a.Nb(28,"input",10),a.Ic(29,y,2,1,"mat-error",7),a.Ic(30,P,2,1,"mat-error",7),a.Rb(),a.Sb(31,"div",11),a.Sb(32,"button",12),a.Jc(33),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(34,"div",13),a.Sb(35,"span"),a.Jc(36,"Or"),a.Rb(),a.Sb(37,"button",14),a.Jc(38," Sign in "),a.Rb(),a.Rb(),a.Rb()),2&t){const t=a.tc(6);a.Ab(3),a.Kc(e.registerBox.mainHeading),a.Ab(2),a.jc("formGroup",e.registerForm),a.Ab(3),a.Kc(e.registerBox.firstNameLabel),a.Ab(3),a.jc("ngIf",e.registerForm.get("firstName").hasError("required")&&t.submitted),a.Ab(1),a.jc("ngIf",e.registerForm.get("firstName").hasError("pattern")&&t.submitted),a.Ab(2),a.Kc(e.registerBox.lastNameLabel),a.Ab(3),a.jc("ngIf",e.registerForm.get("lastName").hasError("required")&&t.submitted),a.Ab(1),a.jc("ngIf",e.registerForm.get("lastName").hasError("pattern")&&t.submitted),a.Ab(2),a.Kc(e.registerBox.emailLabel),a.Ab(3),a.jc("ngIf",e.registerForm.get("email").hasError("required")&&t.submitted),a.Ab(1),a.jc("ngIf",e.registerForm.get("email").hasError("email")&&t.submitted),a.Ab(2),a.Kc(e.registerBox.passLabel),a.Ab(3),a.jc("ngIf",e.registerForm.get("password").hasError("required")&&t.submitted),a.Ab(1),a.jc("ngIf",e.registerForm.get("password").hasError("minlength")&&t.submitted),a.Ab(3),a.Lc(" ",e.registerBox.buttonName," ")}},directives:[b.a,l.r,l.m,l.g,u.f,u.c,g.a,l.b,l.l,l.f,o.m,f.a,n.d,u.b],styles:[".card-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fafafa}.card[_ngcontent-%COMP%]{padding:15px;width:-webkit-max-content;width:max-content;margin:4em auto 3em}.form-container[_ngcontent-%COMP%]{padding:10px}.form[_ngcontent-%COMP%]{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}h2[_ngcontent-%COMP%]{font-size:24px;font-weight:500;padding-left:0;padding-bottom:8px;border-bottom:1px solid #ebebeb;margin:10px 32px 0 10px}.form-element[_ngcontent-%COMP%]{padding:5px 0 0 2px;width:100%;font-size:14px}.button[_ngcontent-%COMP%]{background:#292929;padding:0 40px;text-transform:uppercase;font-size:12px;color:#fff;font-weight:500;letter-spacing:.025em;border-radius:0;height:44px}@media (min-width:480px){.form[_ngcontent-%COMP%]{max-width:400px}}.login-button-wrapper[_ngcontent-%COMP%]{min-height:5em;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin-bottom:3em}"]}),t})(),canActivate:[m]},{path:"login",component:v,canActivate:[c]},{path:"user",loadChildren:()=>Promise.all([r.e(0),r.e(14)]).then(r.bind(null,"OCa8")).then(t=>t.LayoutModule)}];let F=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(I)],n.g]}),t})();var M=r("wg1y");let C=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[o.c,F,M.a]]}),t})()}}]);