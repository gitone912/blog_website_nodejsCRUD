import Account from "../models/accountData.js";
import bcrypt from "bcrypt";
class AccountController {
    static signup_signin_page = (req, res) => {
        res.render('signup_signin')
    }
    static signin = async (req, res) => {
        try {
            const { username, password } = req.body;
            const result = await Account.findOne({ username: username });
            if (result != null){
                const compare = await bcrypt.compare(password, result.password);
                if (result.username == username && compare == true) {
                    res.redirect("/")
                }
                else {
                    const errorMessage = "Wrong username or password";
                    res.redirect(`/login?errorMessage=${encodeURIComponent(errorMessage)}`);
                }
            }
            
        } catch (error) {
            console.log(error)
            res.redirect(`/login?errorMessage=${encodeURIComponent(errorMessage)}`);

        }
    }
    static signup = async (req, res) => {

        const hashpassword = await bcrypt.hash(req.body.password, 10);
        try {
            const { fullname ,username, password, email } = req.body;
            const account = new Account(
                {   
                    fullname: fullname,
                    username: username,
                    password: hashpassword,
                    email: email
                }
            );
            await account.save();
            res.redirect("/")
        } catch (error) {
            console.log(error)
            const errorMessage = "Username or email already exists";
            res.redirect(`/login?errorMessage=${encodeURIComponent(errorMessage)}`);
        }
    }


}
export default AccountController