import { getData, getExamsData } from "./genericTests/getData.js";
import { userTests } from "./userTests/index.js";
import { examsTests } from "./examsTests/index.js";

userTests();
examsTests();
getData("categories");
getData("disciplines");
getData("teachersDisciplines");
getData("teachers");
getExamsData("disciplines");
getExamsData("teachers");
