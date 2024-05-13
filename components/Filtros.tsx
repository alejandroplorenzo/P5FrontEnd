import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

type Props = {
    name: Signal<string>;
    color: Signal<string>;
    formatThirtyFive: Signal<boolean>;
    formatOneTwenty: Signal<boolean>;
};

const Filtros: FunctionComponent<Props> = ({ name, color, formatThirtyFive, formatOneTwenty }) => {
    const handleNameChange = (e: any) => {
        const { value } = e.target;
        name.value = value;
    };

    const handleColorChange = (e: any) => {
        const { value } = e.target;
        color.value = value;
    };

    const handleFormatThirtyFiveChange = (e: any) => {
        const { checked } = e.target;
        formatThirtyFive.value = checked;
    };

    const handleFormatOneTwentyChange = (e: any) => {
        const { checked } = e.target;
        formatOneTwenty.value = checked;
    };

    return (
        <div>
            <div>
                <label htmlFor="nameInput">Name</label>
                <input
                    id="nameInput"
                    type="text"
                    value={name.value}
                    onInput={handleNameChange}
                />
            </div>
            <div>
                <label>Choose Color:</label>
                <select
                    value={color.value}
                    onInput={handleColorChange}
                >
                    <option value="any">Any</option>
                    <option value="true">On color</option>
                    <option value="false">Black and white</option>
                </select>
            </div>
            <div>
                <label>Choose Format:</label>
                <div>
                    <span>35mm</span>
                    <input
                        type="checkbox"
                        checked={formatThirtyFive.value}
                        onChange={handleFormatThirtyFiveChange}
                    />
                    <span>120mm</span>
                    <input
                        type="checkbox"
                        checked={formatOneTwenty.value}
                        onChange={handleFormatOneTwentyChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filtros;

