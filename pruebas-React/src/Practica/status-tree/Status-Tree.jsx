import React, { useState } from 'react';
import { Box, Button, HStack, Radio } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const StatusTree = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const options = ["FULL", "Flex", "Colecta", "A acordar", "ME1"]; // Tus opciones

    const handleRadioClick = (value) => {
        setSelectedValue(selectedValue === value ? "" : value);
    };

    const handleNewCard = () => {
        // Lógica para añadir nueva tarjeta
    };

    return (
        <Box className="button-radio-container">
            <HStack spacing={4}>
                <Button onClick={handleNewCard} leftIcon={<AddIcon />} colorScheme="blue">
                    ADD NEW
                </Button>

                <HStack className="radio-button-container" direction={{ base: "column", sm: "row" }} spacing="20px">
                    {options.map((value, index) => (
                        <Radio value={value} isChecked={selectedValue === value} onChange={() => handleRadioClick(value)} key={value}>
                            <span className="chakra-radio__label">
                                {value}
                                <span className="option-count">0</span> {/* Aquí agregamos el option-count */}
                            </span>
                        </Radio>
                    ))}
                </HStack>

                <Button className="save-button save-button-style" onClick={handleNewCard}>
                    Guardar Todo
                </Button>
            </HStack>
        </Box>
    );
};

export default StatusTree;
