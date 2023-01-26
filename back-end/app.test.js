
import {express} from "express";
import {UserRoute} from "./routes/UserRoute.js";

const app = express();

app.use(express.json());

app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));


describe("test create route", () => {
	const todo = {
		fname: "Create todo",
    lanme:"eeeeeeee",
    email:"eerer@grfg.com",
    phone:"0717848895",
    gender:"M",
    picture:"https://randomuser.me/api/portraits/men/31.jpg"
	};

	test("Should have key record and msg when created", async () => {
	//	const mockCreateTodo = jest.fn((): any => todo);
		// jest
		// 	.spyOn(TodoInstance, "create")
		// 	.mockImplementation(() => mockCreateTodo());

		const res = await request(app).post("/users").send(todo);

		expect(mockCreateTodo).toHaveBeenCalledTimes(1);
		expect(res.body).toHaveProperty("msg");
		expect(res.body).toHaveProperty("record");
	});
});

