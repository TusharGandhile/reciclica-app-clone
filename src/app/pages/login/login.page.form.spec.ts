import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () => {
    let form: FormGroup;
    let loginPageForm: LoginPageForm;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })
    it('should create empty login form', () => {
        expect(form).not.toBeNull();
        expect(form.controls['email']).not.toBeNull();
        expect(form.controls['email'].value).toEqual('');
        expect(form.controls['email'].valid).toBeFalsy();

        expect(form.controls['password']).not.toBeNull();
        expect(form.controls['password'].value).toEqual('');
        expect(form.controls['password'].valid).toBeFalsy();
    });

    it('should have invalid email if email is not valid', ()=>{
        form.get('email')?.setValue('invalid email');
        expect(form.get('email')?.valid).toBeFalsy();
    });

    it('should have valid email if email is valid', ()=>{
        form.get('email')?.setValue('valid@gmail.com');
        expect(form.get('email')?.valid).toBeTruthy();
    });

    it('should have valid form', ()=>{
        form.get('email')?.setValue('valid@gmail.com');
        form.get('password')?.setValue('anyPASSWORD');
        expect(form.valid).toBeTruthy();
    });
});