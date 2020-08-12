import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

// service
import { ToastService } from "./../../service/toast.service";
import { SpinnerService } from "./../../service/spinner.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  styleUrls: ["./login.css"],
})
export class LoginComponent {
  @ViewChild("submitForm") submitForm: NgForm;

  constructor(
    private toaster: ToastService,
    private router: Router,
    private spinner: SpinnerService
  ) {}
  loginForm = (value: any) => {
    console.log("value", value);
    if (value.email == "admin@gmail.com" && value.password == "123123") {
      this.toaster.showToast("Success", "Login successfully", "success");
      this.spinner.show();
      this.router.navigate(["dashboard"]);
      this.submitForm.reset();
    } else {
      this.toaster.showToast("Error", "Invailied email or password", "error");
      console.log("login fail");
    }
  };
}
