import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/Input';
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * 自动完成输入框组件
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
