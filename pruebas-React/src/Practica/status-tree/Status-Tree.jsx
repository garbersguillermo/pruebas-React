import React, { useState } from 'react';
import { Box, Button, HStack, AddIcon } from "@chakra-ui/react";
import './status-tree.scss';

const StatusTree = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleNewCard = () => {
        // Lógica para añadir nueva tarjeta
    };

    const toggleOption = (option) => {
        // Si se hace clic en la opción ya seleccionada, desmarcarla
        if (selectedOption === option) {
            setSelectedOption(null);
        } else {
            setSelectedOption(option);
        }
    };

    const options = ["FULL", "Flex", "Colecta", "A acordar", "ME1"];

    return (
        <Box className="button-radio-container">
            <HStack spacing={4}>
                <Button onClick={handleNewCard} leftIcon={<AddIcon />} colorScheme="blue">
                    ADD NEW
                </Button>

                <HStack className="radio-button-container" direction={{ base: "column", sm: "row" }} spacing="20px">
                    {options.map((option) => (
                        <Button
                            key={option}
                            onClick={() => toggleOption(option)}
                            colorScheme={selectedOption === option ? "blue" : "gray"}
                        >
                            {option} <span className="option-count">0</span>
                        </Button>
                    ))}
                </HStack>

                <Button className="save-button" onClick={handleNewCard}>
                    Guardar Todo
                </Button>
            </HStack>
        </Box>
    );
};

export default StatusTree;
