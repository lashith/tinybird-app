import React from "react";
import MUIDataTable, { MUIDataTableOptions} from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {  Link } from "@material-ui/core";
import { Session } from '../store/sessionTypes';
import Styles from './Sessions.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

interface SessionsListProps {
  Sessions:Session[];
}

const ExpandableRowTable = (props:SessionsListProps) => {
  const {Sessions} = props;
  console.log( Sessions )

  const schools = Sessions.map((school) => school.collage_name)

  const uniqueChars:string[] = [];
  schools.forEach((c) => {
      if (!uniqueChars.includes(c)) {
          uniqueChars.push(c);
      }
  });
  const schoolsnames:any = uniqueChars.flatMap((sch:string)=>[[sch]])
  console.log('secondschool', schoolsnames)


  const columns = [
    {
      name:"session id"
    },
    {
      name:"tutor name"
    },
    {
      name:"student name"
    },
    {
      name:"session started"
    },
    {
      name:"session link",
      render:(value:any) => {
        return (
          <Link href={value.session_link} target="_blank">{value.session_link}</Link>
        )
      }
    },
 // {
    //   name:"Advance Options",
    //   render:(value:any) => {
    //     if(value === value.session_link)
    //     return (
    //       <ul className={Styles.iconlist}>
    //         <li> <Link href={value.session_link} target="_blank"><VisibilityIcon /></Link></li>
    //         <li><span>close</span></li>
    //         <li><span>user</span></li>
    //       </ul>
         
    //     )
    //   }
    // }
          
  ];

  const options: MUIDataTableOptions = {
    filter: true,
     onFilterChange: (changedColumn:any, filterList:any) => {
      // console.log(changedColumn, filterList);
    },
    selectableRowsHideCheckboxes:false,
    selectableRows: 'none',
     filterType: "dropdown",
    // responsive: "scrollMaxHeight",
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData:any, rowMeta:any) => {
      // console.log(rowData, rowMeta);
      return (
        <>
          <tr>
            <td colSpan={6}>
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableBody>
                    {Sessions.map(row => (
                      <TableRow key={row.collage_name}>
                        <TableCell align="right">{row.session_id}</TableCell>
                        <TableCell align="right">{row.tutor_name}</TableCell>
                        <TableCell align="right">{row.student_name}</TableCell>
                        <TableCell align="right">{row.session_started}</TableCell>
                        <TableCell align="right">
                    <Link href={`${row.session_link}`} target="_blank">{row.session_link} </Link>  
                    </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>  

                
                </Table>
              </TableContainer>
            </td>
          </tr>
      
        </>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
    title=''
    data={schoolsnames}
      // data={data}
      columns={columns}
       options={options}
    />
  );
};

export default ExpandableRowTable;
