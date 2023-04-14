import 'antd/dist/reset.css';
import './App.css';
import {Button, Table, Modal, Input, DatePicker, Tag, Select, Radio} from 'antd';
import { useState } from 'react';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import dayjs from 'dayjs';
// import locale from 'antd/locale/zh_CN';
import Search from 'antd/es/transfer/search';

function App() {

  const newTask={
    id: 3,
    Time: '10:13PM',
    Title: 'Task 3',
    Description:'This is task 3',
    Due_On: '2023/06/17',
    Tag: ['tag2', 'tag4'],
    Status: 'Open',
  }
  const onButtonClick=()=>{
      setIsAdding(true);
      setAddingTask({id:Count,
        Time: `${dayjs()}`,
        Title: '',
        Description:'',
        Due_On: '',
        Tag: [],
        Status: 'Open',
      });
  };
  const deleteTask=(record)=>{
    Modal.confirm({
      title: `Are you sure you want to delete ${record.Title}?`,
      onOk: ()=>{
        setData((data)=>{
          return data.filter(Element=> Element.id !== record.id)
         })
      },
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No'
    })
  }
  const editTask=(record)=>{
    setIsEditing(()=> true);
    setEditingTask({...record})
    console.log(EditingTask);
  }

  const [Data, setData]=useState([
    {
      id:1,
      Time: `${dayjs("2022/08/12","YYYY/MM/DD")}`,
      Title: 'Task one',
      Description:'This is task one',
      Due_On: '2023/04/14',
      Tag: ["tag1", "tag2"],
      Status: 'Open',
     
    },
    {
      id:2,
      Time: `${dayjs("2022/09/10","YYYY/MM/DD")}`,
      Title: 'Task two',
      Description:'This is task two',
      Due_On: '2023/05/13',
      Tag: ["tag4", "tag5"],
      Status: 'Done',
      
    },
    {
      id:3,
      Time: `${dayjs("2020/06/01","YYYY/MM/DD")}`,
      Title: 'Task three',
      Description:'This is task three',
      Due_On: '2022/02/14',
      Tag: ["tag1", "tag2"],
      Status: 'Overdue',
     
    },
    {
      id:4,
      Time: `${dayjs("2021/09/10","YYYY/MM/DD")}`,
      Title: 'Task four',
      Description:'This is task four',
      Due_On: '2023/05/13',
      Tag: ["tag4", "tag5"],
      Status: 'Working',
      
    },
    {
      id:5,
      Time: `${dayjs("2022/03/16","YYYY/MM/DD")}`,
      Title: 'Task five',
      Description:'This is task five',
      Due_On: '2023/07/24',
      Tag: ["tag1", "tag2"],
      Status: 'Open',
     
    },
    {
      id:6,
      Time: `${dayjs("2022/01/12","YYYY/MM/DD")}`,
      Title: 'Task six',
      Description:'This is task six',
      Due_On: '2023/05/13',
      Tag: ["tag4", "tag5"],
      Status: 'Done',
      
    },
    {
      id:7,
      Time: 'Fri, 14 Apr 2023 04:20:41 GMT',
      Title: 'Task seven',
      Description:'This is task seven',
      Due_On: '2023/04/14',
      Tag: ["tag1", "tag2"],
      Status: 'Open',
     
    },
    {
      id:8,
      Time: `${dayjs("2024/09/10","YYYY/MM/DD")}`,
      Title: 'Task eight',
      Description:'This is task eight',
      Due_On: '2023/05/13',
      Tag: ["tag4", "tag5"],
      Status: 'Open',
      
    },
    {
      id:9,
      Time: 'Fri, 14 Apr 2023 04:20:41 GMT',
      Title: 'Task nine',
      Description:'This is task nine',
      Due_On: '2023/04/14',
      Tag: ["tag1", "tag2"],
      Status: 'Open',
     
    },
    {
      id:10,
      Time: `${dayjs("2024/09/10","YYYY/MM/DD")}`,
      Title: 'Task ten',
      Description:'This is task ten',
      Due_On: '2023/05/13',
      Tag: ["tag4", "tag5"],
      Status: 'Open',
      
    },
    {
      id:11,
      Time: 'Fri, 14 Apr 2023 04:20:41 GMT',
      Title: 'Task eleven',
      Description:'This is task eleven',
      Due_On: '2023/04/14',
      Tag: ["tag1", "tag2"],
      Status: 'Open',
     
    },
    {
      id:12,
      Time: `${dayjs("2024/09/10","YYYY/MM/DD")}`,
      Title: 'Task twelve',
      Description:'This is task twelve',
      Due_On: '2023/05/13',
      Tag: ["tag4", "tag5"],
      Status: 'Open',
      
    }
  ])
  
  
 
  const [SearchValue, setSearchValue]=useState("")
  const [Count, setCount]=useState(Data.length+1);
  const [AddingTask, setAddingTask]=useState(null)
  const [IsAdding, setIsAdding]=useState(false);
  const [TagOptions, setTagOptions]=useState([]);
  const [IsEditing, setIsEditing]=useState(false);
  const [EditingTask, setEditingTask]=useState(null);
  let records=[];

  const [DataNew, setDataNew]=useState([...Data]);

  const refresh=()=>{
       if(SearchValue===""){
        setDataNew((datanew)=>[...Data]);
       }
       else{
        
        setDataNew(datanew=> Data.filter((record)=>{
          return(
                     record.id.toString().includes(SearchValue) ||
                      record.Time.includes(SearchValue) ||
                      record.Title.toLowerCase().includes(SearchValue.toLowerCase()) ||
                      record.Description.toLowerCase().includes(SearchValue.toLowerCase()) ||
                      record.Due_On.includes(SearchValue) ||
                      (record.Tag).includes(SearchValue)||
                      record.Tag.includes(SearchValue)||
                      record.Status.toLowerCase().includes(SearchValue.toLowerCase())
                   )  
         })
        )
       }
      //  console.log(DataNew)
  }


  const columnField= [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 1, 
    },
    {
      title:'Timestamp',
      dataIndex: 'Time',
      key:2,
      sorter:(record1, record2)=>{ return (record1.Time) > record2.Time}

    },
    {
      title:'Title',
      dataIndex: 'Title',
      key:3,
      sorter: (record1, record2)=>{return record1.Title.length - record2.Title.length}
    },
    {
      title:'Description',
      dataIndex: 'Description',
      key:4,
      sorter: (record1, record2)=>{return record1.Description.length - record2.Description.length}
      
    },
    {
      title:'Due Date',
      dataIndex: 'Due_On',
      key:5,
      sorter: (record1, record2)=>{return dayjs(record1.Due_On) > dayjs(record2.Due_On)}
    },
    {
      title:'Tag',
      dataIndex: 'Tag',
      key:6,
      filters:[
        {text:'tag4', value:'tag4'},
        {text:'tag5', value:'tag5'},
        {text:'tag1', value:'tag1'},
        {text:'tag2', value:'tag2'}
      ],
      onFilter: (value, record)=>{
        return record.Tag.includes(value)
      },
      render:(tags)=>{
       return  <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      }
    },
    {
      title:'Status',
      dataIndex: 'Status',
      key:7,
      filters:[
        {text:'Open', value:'Open'},
        {text:'Working', value:'Working'},
        {text:'Done', value:'Done'},
        {text:'Overdue', value:'Overdue'}
      ],
      onFilter: (value, record)=>{
        return record.Status===value;
      }
    },
    {
      title:'Actions',
      render: (record)=>{
          return <>
          <EditOutlined onClick={()=>{editTask(record)}} style={{marginRight:"10px"}}/>
          <DeleteOutlined onClick={()=>{deleteTask(record)}} style={{color: "Red"}}/>
          </> 
      },
      // filteredValue:[SearchValue],
      // onFilter:(value, record)=>{
      //   return (
      //     record.id.toString().includes(value) ||
      //      record.Time.includes(value) ||
      //      record.Title.toLowerCase().includes(value.toLowerCase()) ||
      //      record.Description.toLowerCase().includes(value.toLowerCase()) ||
      //      record.Due_On.includes(value) ||
      //      (record.Tag).includes(value)||
      //      record.Tag.includes(TagFilter)||
      //      record.Status.toLowerCase().includes(value.toLowerCase())
      //   );
      // } 
      
    }

  ]
 
  return (
    <div className="App">
      <header className="App-header">
      <div style={{display:"flex"}}>
        <Input.Search placeholder='Type to search' onChange={(e)=>{
          setSearchValue(e.target.value);
          refresh();
          
        }} style={{
          width: 400,
          marginRight: '20px'
        }}/>
        <Button loading={false} value={SearchValue} onClick={onButtonClick}>Add a Task</Button>
      </div>
       <Table dataSource={DataNew} columns={columnField} style={{marginTop: '10px'}} pagination={true}></Table>
       <Modal title="Edit Task" open={IsEditing} onOk={()=>{
        
              if(EditingTask.Title!=='' && EditingTask.Description!=='')
              {
                setIsEditing(()=>false);
                setData(data=>{ 
                return data.map(task=>{
                  if(task.id===EditingTask.id)
                  return EditingTask
                  else
                  return task
                })
              })
          }
          else{
            Modal.confirm({
              title: "Title or Description field cannot be empty",
              okText:"Go back",
              cancelButtonProps: {
                disabled: true,
                hidden:true
              }
            })
          }
      }} onCancel={()=>{
        setIsEditing(()=>false);
        setEditingTask(null)}}
        destroyOnClose={true}
        maskClosable={false}
         >
         
          <Input type="text" showCount maxLength={100} placeholder={"*Title"} value={EditingTask?.Title} style={{marginBottom:"10px"}} 
          onChange={(e)=>{ 
            setEditingTask(task=>{
               return {...task, Title: e.target.value}
               })
              }} />

          <Input.TextArea showCount maxLength={1000} placeholder={"*Description"} value={EditingTask?.Description} style={{marginBottom:"10px"}} 
          onChange={(e)=>{
             setEditingTask(task=>{
               return {...task, Description: e.target.value}
               })
              }} autoSize/>

          <DatePicker placeholder={"Due Date"} defaultValue={dayjs(EditingTask?.Due_On, 'YYYY/MM/DD')} style={{marginBottom:"10px"}} format={'YYYY/MM/DD'} 
            onChange={(date, dateString)=>{ 
            setEditingTask(task=>{
              return {...task, Due_On: dateString }
              })
            }} 
              allowClear={false}/> 

            <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Add Tags"
            onChange={(values)=> setEditingTask(task=>{
              return {...task, Tag: values};
            })}
            defaultValue={EditingTask?.Tag}
            options={TagOptions}
            />         
      
            <Radio.Group value={EditingTask?.Status} onChange={(e)=>{
              setEditingTask((task)=>{
                return {...task, Status: e.target.value}
              })
            }}>
                  <Radio value={"Open"}>Open</Radio>
                  <Radio value={"Working"}>Working</Radio>
                  <Radio value={"Done"}>Done</Radio>
                  <Radio value={"Overdue"}>Overdue</Radio>
                </Radio.Group>
       </Modal>

       <Modal title="Add Task" open={IsAdding} onOk={()=>{
        if(AddingTask.Title!=='' && AddingTask.Description!=='')
        {
          setIsAdding(()=>false);
          setData(records=>{
            return [...records, AddingTask];
          })
          setCount((count)=> {return count+1});
          }
          else{
            Modal.confirm({
              title: "Title or Description field cannot be empty",
              okText:"Go back",
              cancelButtonProps: {
                disabled: true,
                hidden:true
              }

            })
          }
             
         }} 
      onCancel={()=>{
        setIsAdding(()=>false);
        
        }}
         destroyOnClose={true}
         maskClosable={false}>
          
          <Input type="text" showCount maxLength={100} placeholder={"*Title"}  style={{marginBottom:"10px"}} 
          onChange={(e)=>{ 
            setAddingTask(task=>{
               return {...task, Title: e.target.value}
               })
              }} />

          <Input.TextArea showCount maxLength={1000} placeholder={"*Description"}  style={{marginBottom:"10px"}} 
          onChange={(e)=>{
             setAddingTask(task=>{
               return {...task, Description: e.target.value}
               })
              }} autoSize/>

          <DatePicker placeholder={"Due Date"} defaultValue={dayjs()} style={{marginBottom:"10px"}} format={'YYYY/MM/DD'} 
            onChange={(date, dateString)=>{ 
            setAddingTask(task=>{
              return {...task, Due_On: dateString }
              })
            }} 
              allowClear={false}/> 

            <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Add Tags"
            onChange={(values)=> setAddingTask(task=>{
              return {...task, Tag: values};
            })}
            
            options={TagOptions}
            />         
      
            <Radio.Group onChange={(e)=>{
              setAddingTask((task)=>{
                return {...task, Status: e.target.value}
              })
            }}>
                  <Radio value={"Open"}>Open</Radio>
                  <Radio value={"Working"}>Working</Radio>
                  <Radio value={"Done"}>Done</Radio>
                  <Radio value={"Overdue"}>Overdue</Radio>
                </Radio.Group>

         </Modal>

      </header>
    </div>
  );
}
export default App;


// const handleNewTag=(values)=>{ 
//   values.forEach(val => {
//     let flag= TagOptions.find(tag=> tag===val)
//     if(flag===undefined)
//     {
//       setTagOptions([...TagOptions,...[val]]);
//     }
//   });
//   console.log(TagOptions);
// }

// ()=>{
//   if(SearchValue!=="")
//   {
//     return Data.filter((record)=>{
//       return (
//         record.id.toString().includes(SearchValue) ||
//          record.Time.includes(SearchValue) ||
//          record.Title.toLowerCase().includes(SearchValue.toLowerCase()) ||
//          record.Description.toLowerCase().includes(SearchValue.toLowerCase()) ||
//          record.Due_On.includes(SearchValue) ||
//          (record.Tag).includes(SearchValue)||
//          record.Tag.includes(SearchValue)||
//          record.Status.toLowerCase().includes(SearchValue.toLowerCase())
//       );
//     })
//   }
//   else{
//     return Data;
//   }
//  }


