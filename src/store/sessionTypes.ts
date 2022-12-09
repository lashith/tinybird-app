// export type Session = {
//     session_id: number,
//     session_link: string,
//     session_started_at: string,
//     session_started: number,
//     tutor_joined: number,
//     student_joined: number,
//     is_tutor_present: number,
//     is_student_present: number  
// }
export type Session = {
    session_id: number,
    tutor_name:string,
    student_name:string,
    session_link: string,
    collage_name: string,
    session_started_at: string,
    session_started: number,
    tutor_joined: number,
    student_joined: number,
    is_tutor_present: number,
    is_student_present: number,
    audio_status:string,
    tutor_center:string,
    volume_status:string,
    workspace_status:string,
    tutor_status:string,
    live_issues_AS:number,
    live_issues_SD:number,
    live_issues_SS:number,
    live_issues_SUJ:number,
    live_issues_TC:number,
    live_issues_TD:number
}