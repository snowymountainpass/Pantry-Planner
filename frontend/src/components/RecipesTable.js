import {DataGrid, GridColDef} from "@mui/x-data-grid";
import * as React from "react";
import {Center} from "@mantine/core";
import Box from "@mui/material/Box";


export default function RecipesTable(){

    const columns : GridColDef[] = [
        { field: 'id', headerName: 'ID',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 }, // , flex: 1
        { field: 'RecipeTitle', headerName: 'Recipe Title',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },
        { field: 'PreparationTime', headerName: 'Preparation Time (minutes)',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },
        { field: 'NoOfPortions', headerName: 'No. of Portions',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },
        { field: 'NoOfCalories', headerName: 'No. of Calories',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },

    ];

    let rows = [
        { id: 1, RecipeTitle: 'Negresa', PreparationTime: 65, NoOfPortions: 30,NoOfCalories:500, align:'center'}
    ]

    return (
        <>
            <Center>
                <div style={{height: 400, width: '95%'}}>
                    <div style={{display: 'flex', height: '100%'}}>
                        <div style={{flexGrow: 1}}>
                            <Box
                                sx={{
                                    height: 300,
                                    width: 1,
                                    '& .super-app-theme--header': {
                                        backgroundColor: '#1864AB',
                                    },
                                }}
                            >
                                <DataGrid
                                    autoHeight
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </Center>
        </>
    );
}