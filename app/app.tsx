import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./app.scss";

function Test() {
    const [val, setVal] = useState("");
    const [val2, setVal2] = useState(0);
    const [operation, setOperation] = useState<null | "+" | "-" | "*" | "/">(null);
    const [operating, setOperating] = useState(false);
    const [equalPressed, setEqualPressed] = useState(false);

    function createDigitButton(d: string) {
        return (
            <Button
                variant="contained"
                onClick={() => {
                    if (equalPressed) {
                        setEqualPressed(false);
                        setOperation(null);
                    }
                    setVal((a) => {
                        const r = operating ? d : a + d;
                        return r === "0" ? "" : r;
                    });
                    setOperating(false);
                }}
            >
                {d}
            </Button>
        );
    }

    function createOperatorButton(o: "+" | "-" | "*" | "/") {
        return (
            <Button
                variant="contained"
                onClick={() => {
                    if (equalPressed) {
                        setEqualPressed(false);
                        setOperation(null);
                    }
                    if (!operating) {
                        setVal2(calc);
                        setOperating(true);
                    }
                    setOperation(o);
                }}
            >
                {o}
            </Button>
        );
    }

    function calc() {
        switch (operation) {
            case "+":
                return val2 + +val;
            case "-":
                return val2 - +val;
            case "*":
                return val2 * +val;
            case "/":
                return val2 / +val;
            case null:
                return +val;
        }
    }

    return (
        <div>
            <TextField
                value={operating ? val2 : val !== "" ? val : 0}
                style={{ margin: "0.5em" }}
                InputProps={{ readOnly: true }}
            />
            <div />

            {createDigitButton("1")}
            {createDigitButton("2")}
            {createDigitButton("3")}
            {createOperatorButton("/")}
            <div />
            {createDigitButton("4")}
            {createDigitButton("5")}
            {createDigitButton("6")}
            {createOperatorButton("*")}
            <div />
            {createDigitButton("7")}
            {createDigitButton("8")}
            {createDigitButton("9")}
            {createOperatorButton("-")}
            <div />
            <Button
                variant="contained"
                onClick={() => {
                    setVal("");
                    setOperation(null);
                    setOperating(false);
                    setEqualPressed(false);
                }}
            >
                C
            </Button>
            {createDigitButton("0")}
            <Button
                variant="contained"
                onClick={() => {
                    setVal2(calc);
                    setOperating(true);
                    setEqualPressed(true);
                }}
            >
                =
            </Button>
            {createOperatorButton("+")}
            <div />
        </div>
    );
}

export function App() {
    return (
        <div>
            <Test />
        </div>
    );
}
