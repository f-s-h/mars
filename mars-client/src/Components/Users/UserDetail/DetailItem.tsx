import React from 'react'
import { Box } from '@mui/material'
import { Address, PhoneNumber } from '../../../models'

interface DetailItemProps {
    name: string,
    value: any
}

export const DetailItem = (props: DetailItemProps) => {
  return (
        <Box
            sx={{
                width: "100%",
                margin: "1vh",
            }}
        >
            <Box
                sx={{
                    display: "table-cell",
                    width: "10vw",
                    height: "auto",
                    border: "dashed 1px",
                    paddingRight: "1vh"
                }}
            >   
                {props.name}
            </Box>
            <Box
                sx={{
                    display: "table-cell",
                    border: "solid 1px",
                    width: "20vw",
                    height: "auto",
                }}
            >
                {props.value != null ? props.value : ""}
            </Box>
        </Box>
  )
}
