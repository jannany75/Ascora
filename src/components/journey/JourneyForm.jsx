import Button from "../common/Button";
import Input from "../common/Input";

function JourneyForm() {

    return (

        <form>

            <Input
                placeholder="Journey Title"
            />

            <textarea
                placeholder="Description"
            />

            <Input
                placeholder="Goal"
            />

            <Button
                text="Create Journey"
                className="loginButton"
            />

        </form>

    );

}

export default JourneyForm;