import {useState} from "react";
import {Input} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const Calculator = () => {
    const [calculateValues, setCalculateValues] = useState<{
        age: string;
        weight: string;
        goal: string;
    }>({
        age: '',
        weight: '',
        goal: '',
    });

    const [result, setResult] = useState('');

    const onDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCalculateValues({
            ...calculateValues,
            [e.target.name]: e.target.value
        });
    };

    const onGoalChange = (value: string) => {
        setCalculateValues({
            ...calculateValues,
            goal: value
        });
    };

    const onCalculate = () => {
        const {age, weight, goal} = calculateValues;

        if (!age || !weight || !goal) {
            setResult('Будь ласка, заповніть всі поля.');
            return;
        }

        const ageNum = parseInt(age, 10);
        const weightNum = parseFloat(weight);

        if (isNaN(ageNum) || isNaN(weightNum)) {
            setResult('Будь ласка, введіть коректні числові значення для віку та ваги.');
            return;
        }

        let calculationResult = '';

        switch (goal) {
            case 'loseWeight':
                calculationResult = `Для схуднення при вазі ${weightNum} кг рекомендується споживати приблизно ${Math.max(1200, weightNum * 20)} ккал на день.`;
                break;
            case 'healthStr':
                calculationResult = `Для укріплення здоров'я, зосередьтесь на збалансованій дієті та тренуваннях.`;
                break;
            case 'muscleStr':
                calculationResult = `Для укріплення м'язів при вазі ${weightNum} кг, вживайте близько ${Math.max(150, weightNum * 1.5)} грам білка щодня.`;
                break;
            default:
                calculationResult = 'Будь ласка, оберіть ціль.';
        }

        setResult(calculationResult);
    };

    return (
        <Drawer>
            <div className={'flex flex-col items-center'}>
                <h1 className={'font-semibold text-xl'}>Калькулятор цілей</h1>
                <div className={' rounded-md px-9 py-6  mt-5 w-[80%] flex flex-col items-center'}>
                    <div className={'flex flex-col items-center justify-center w-full'}>
                        <label className={'mb-1'}>Вік:</label>
                        <Input type={"text"} placeholder={"Ваш вік"} value={calculateValues.age} name={"age"}
                               onChange={onDataChange} className={'rounded-lg bg-quaternary w-1/3 min-w-[250px]'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center my-4 w-full'}>
                        <label className={'mb-1'}>Вага:</label>
                        <Input type={"text"} placeholder={"Ваша вага"} value={calculateValues.weight} name={"weight"}
                               onChange={onDataChange} className={'rounded-lg bg-quaternary w-1/3 min-w-[250px]'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center w-full'}>
                        <label className={'mb-1'}>Ціль:</label>
                        <Select name={"goal"} value={calculateValues.goal} onValueChange={onGoalChange}>
                            <SelectTrigger className="rounded-lg bg-quaternary w-1/3 min-w-[250px]">
                                <SelectValue placeholder="Ваша ціль"/>
                            </SelectTrigger>
                            <SelectContent className={'bg-quaternary'}>
                                <SelectItem value="loseWeight">Схуднення</SelectItem>
                                <SelectItem value="healthStr">Укріплення здоров'я</SelectItem>
                                <SelectItem value="muscleStr">Укріплення м'язів</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DrawerTrigger>
                        <button onClick={onCalculate}
                                className={'bg-secondary_dark text-white rounded-md px-5 py-2 mt-5'}>Розрахувати
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className={'p-5'}>
                        <DrawerHeader>
                            <DrawerTitle>{
                                calculateValues.goal === 'loseWeight' ? 'Схуднення' :
                                    calculateValues.goal === 'healthStr' ? 'Укріплення здоров' :
                                calculateValues.goal === 'muscleStr' ? 'Укріплення мязів' : ''
                            }</DrawerTitle>
                        </DrawerHeader>
                        <DrawerDescription>
                            {result}
                        </DrawerDescription>
                        <DrawerFooter>
                            <DrawerClose>
                                <button className={'bg-secondary_dark text-white rounded-md px-4 py-2'}>Закрити</button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </div>
            </div>
        </Drawer>
    );
};

export default Calculator;