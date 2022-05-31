import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import {Center} from "@mantine/core";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {CounterInput} from "./CounterInput";
import {GridColDef} from "@mui/x-data-grid";
import BasicDatePicker from "./BasicDatePicker";

import {useForm,Controller} from "react-hook-form";
import {useEffect, useState} from "react";

export default function PantryTable(){

    const columns : GridColDef[] = [
        { field: 'id', headerName: 'ID',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 }, // , flex: 1
        { field: 'Product', headerName: 'Product',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },
        { field: 'Amount', headerName: 'Amount',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },
        { field: 'Measurement', headerName: 'Measurement',headerClassName: 'super-app-theme--header',
            headerAlign: 'center',align: 'center', flex: 1 },
        {
            field: 'ExpirationDate',
            headerName: 'Expiration Date',
            type: 'date',
            flex: 1,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
        },
        { field: 'ModifyQuantity', headerName: 'Modify Quantity',headerClassName: 'super-app-theme--header',
            headerAlign: 'center', flex: 1,align: 'center',sortable: false,
            renderCell: () => (
                <CounterInput/>
            ),
        },

        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 100,
        //     valueGetter: (params) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        //     headerClassName: 'super-app-theme--header',
        //     headerAlign: 'center',
        // },
    ];

    let rows = [
        { id: 1, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 2, Product: 'Flour Flour Flour Flour Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 3, Product: 'Flour', Amount: 1, Measurement: "PCS",ExpirationDate:"12.12.2022", align:'center'},
        { id: 4, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 5, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 6, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 7, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 8, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 9, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 10, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 11, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 12, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 13, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 14, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 15, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 16, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 17, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 18, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 19, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},
        { id: 20, Product: 'Flour', Amount: 1, Measurement: "KG",ExpirationDate:"12.12.2022", align:'center'},

    ];

    const[products,setProducts] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setProducts(products=>[...products,data]);
        console.log("products: "+JSON.stringify(products));
    };
    // console.log(errors);


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
                <Center>
                    <div style={{height: 400, width: '85%'}}>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': {m: 1, width: '25ch'},
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField  type="text" placeholder="Product" {...register("Product", {required: true, maxLength: 80})} />
                                <TextField  type="number" placeholder="Amount" {...register("Amount", {required: true})} inputProps={{ min:0 }} />
                                <FormControl sx={{ m: 1, minWidth: 80 }} defaultValue={"None"}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Measurement</InputLabel>
                                    <Select {...register("Measurement", { required: true })}
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            autoWidth
                                            label="Measurement"
                                    >
                                        <MenuItem value="None">None</MenuItem >
                                        <MenuItem value="kg">kg</MenuItem >
                                        <MenuItem value="g">g</MenuItem >
                                        <MenuItem value="l">l</MenuItem >
                                        <MenuItem value="ml">ml</MenuItem >
                                        <MenuItem value="pcs">pcs</MenuItem >
                                    </Select>
                                </FormControl>
                                <BasicDatePicker  type="datetime" placeholder="Expiration Date" {...register("Expiration Date", {required: true, maxLength: 12})} />

                            </Box>


                            {/*<input type="submit" />*/}
                            <Button variant="contained" type={"submit"}>Add new product</Button>
                        </form>

                    </div>

                </Center>

            </>

        );

}


//TODO: 1) DELETE ROW => https://stackoverflow.com/questions/69384072/how-to-delete-multiple-selected-rows-in-material-ui-datagrid
//TODO: 2) INCREASE QUANTITY (adaugat buton - done; functionalitate)
//TODO: 3) DECREASE QUANTITY (adaugat buton - done; functionalitate)
//TODO: 4) DATE-PICKER => cand Expira Produsul

// <Box
//     sx={{
//         height: 600,
//         width: 1,
//         '& .super-app-theme--header': {
//             backgroundColor: 'rgba(255, 7, 0, 0.55)',
//         },
//     }}
// >

// <div style={{ height: 200, width: '100%' }}>
//     <div style={{ display: 'flex', height: '100%' }}>
//         <div style={{ flexGrow: 1 }}>
//             <Box
//                 sx={{
//                     height: 600,
//                     width: 1,
//                     '& .super-app-theme--header': {
//                         backgroundColor: 'rgba(255, 7, 0, 0.55)',
//                     },
//                 }}
//             >
//                 <DataGrid
//
//                     rows={rows}
//                     columns={columns}
//                     pageSize={5}
//                     rowsPerPageOptions={[5]}
//                     checkboxSelection
//                     sx={{
//                         boxShadow: 2,
//                         border: 2,
//                         borderColor: 'primary.dark',
//                         '& .MuiDataGrid-cell:hover': {
//                             color: 'primary.main.blue',
//                         },
//                     }}
//                 />
//             </Box>
//         </div>
//     </div>
// </div>

// <form onSubmit={}>
//
// </form>
// <TextField id="outlined-basic" label="Product" variant="outlined" value={}/>
// <TextField id="outlined-basic" label="Amount" variant="outlined" value={}/>
// <FormControl sx={{ m: 1, minWidth: 80 }}>
//     <InputLabel id="demo-simple-select-autowidth-label">Measurement</InputLabel>
//     <Select
//         labelId="demo-simple-select-autowidth-label"
//         id="demo-simple-select-autowidth"
//         value={measurement}
//         onChange={handleMeasurementSelection}
//         autoWidth
//         label="Measurement"
//     >
//         <MenuItem value="">
//             <em>None</em>
//         </MenuItem>
//         {/*<MenuItem value={10}>Twenty</MenuItem>*/}
//         <MenuItem>kg</MenuItem>
//         <MenuItem>g</MenuItem>
//         <MenuItem>l</MenuItem>
//         <MenuItem>ml</MenuItem>
//         <MenuItem>pcs</MenuItem>
//
//     </Select>
// </FormControl>
// <BasicDatePicker/>