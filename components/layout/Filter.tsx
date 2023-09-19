'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import { Filter } from 'utils/graphql/filter';

interface FilterProps {
    value: string[];
    onValueChange: (value: string[]) => void;
    filters: Filter[];
}

const Filter = ({ value, filters, onValueChange }: FilterProps) => {
    return (
        <CheckboxGroup label="Select cities" color="warning" value={value} onValueChange={onValueChange}>
            {filters.map((filter) => (
                <Checkbox key={filter.id} value={filter.id}>
                    {filter.title}
                </Checkbox>
            ))}
        </CheckboxGroup>
    );
};

export default Filter;
