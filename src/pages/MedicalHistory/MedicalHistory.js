import { Box, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Container from '@mui/material/Container';
import './MedicalHistory.css'



const MedicalHistory = () => {
	// const theme = useTheme&#40;&#41;;
	// const colors = tokens&#40;theme.palette.mode&#41;;

	return (
		<div className="app">
			<Sidebar sx={{
				height: 800
			}} />
			<main className='content'>
				<Topbar />
				<Box sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					// alignItems: 'center',
				}}>
					<Typography
						variant="h2"
						// color={colors.grey[100]}
						fontWeight="bold"
						sx={{ m: "5px 25px" }}
					>
						Medical History
					</Typography>
					<Typography variant="h5"
						sx={{ m: "0px 25px" }} >
						Form
					</Typography>
					<Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
						{/* HEADER */}
						<div className="row">
							<div className="col-lg-12">
								<div display="flex" justifyContent="space-between" alignItems="center">
									<div className="d-flex justify-content-center align-items-center">
										<div className="login-card1 container">
											<div className="border border-3 border-primary"></div>
											<div className="card bg-white">
												<div className="card-body p-5">
													<p id="mh">MEDICAL HISTORY</p>
													<p
														style="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:115%; font-size:11pt;">
														<span style="	fontapply">&nbsp;</span>
													</p>
													<p
														style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:36pt; line-height:115%; font-size:11pt;">
														<input type="checkbox" name="Check55" /><span
															style="	fontapply">&nbsp;&nbsp;</span><span
																style="	fontapply">No serious illnesses or injuries in
															the&nbsp;</span><strong><span
																style="	fontapply">past</span></strong><span
																	style="width:25.65pt; text-indent:0pt; display:inline-block;">&nbsp;</span><input
															type="checkbox" name="Check55" /><span
																style="	fontapply">&nbsp;&nbsp;</span><span
																	style="	fontapply">No serious illnesses or
															injuries&nbsp;</span><strong><span
																style="	fontapply">now</span></strong>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>


													<table className="table table-bordered">
														<thead className="thead-dark">
															<tr>
																<th scope="col">Date</th>
																<th scope="col">Age</th>
																<th scope="col">Diagnosis/Illness</th>
																<th scope="col-xs-2">Past</th>
																<th scope="col-xs-2">Now</th>
																<th scope="col">Date</th>
																<th scope="col">Age</th>
																<th scope="col">Diagnosis/Illness</th>
																<th scope="col-xs-2">Past</th>
																<th scope="col-xs-2">Now</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Serious Injuries</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Lung/breathing Problems</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Serious head injury</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Asthma</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other serious injury</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Pneumonia</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Loss of consciousness</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Apnea or irregular breathing</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Sleep Problems</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other:<input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Neurological Problems</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Stomach/bowel Problems</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Birth abnormality</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Swallowing problems</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Seizures &#40;any type&#41;</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Gastroesphageal reflux</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Chronic abdominal pain</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Vision Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Chronic diarrhea</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Vision problems at birth</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Chronic constipation</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Requires glasses/contacts</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other:<input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Kidney/Bladder Problems</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Hearing Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Abnormalities at birth</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Hearing problems at birth</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Kidney/bladder infections</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Deafness</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Chronic ear infections</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">&#40;Muscle/bone/joint&#41; Problems </td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Ear tubes</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Abnormalities at birth</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Scoliosis or spinal curvature</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
														</tbody>
														{/* <!-- </table> --> */}
														{/* <!-- <table className="table table-bordered"> --> */}
														<thead className="thead-dark">
															<tr>
																<th scope="col">Date</th>
																<th scope="col">Age</th>
																<th scope="col">Diagnosis/Illness</th>
																<th scope="col-xs-2">Past</th>
																<th scope="col-xs-2">Now</th>
																<th scope="col">Date</th>
																<th scope="col">Age</th>
																<th scope="col">Diagnosis/Illness</th>
																<th scope="col-xs-2">Past</th>
																<th scope="col-xs-2">Now</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Dental Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Circulatory Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Abnormally shaped/ missing teeth</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Anemia</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Extractions/cavities</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Sickle cell disease</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Dental braces</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Chronic low platelet count</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other:<input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Bleeding /bruising problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Skin Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other:<input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Eczema</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Hormone Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Ash leaf patches</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Sugar diabetes</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Café-au-lait spots</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Early puberty</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Late or incomplete puberty</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Growth Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Failure to gain weight</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Mental Health problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Obesity</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>ADHD</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Short stature</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Oppositional defiant disorder</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Tall stature</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Anxiety disorder</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other: <input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Obsessive-compulsive disorder</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td style="font-weight: 600;">Heart Problem</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Depression</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Heart abnormalities at birth</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Bipolar disorder &#40;manic-depressive&#41;</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Heart surgery</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Schizophrenia</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Heart rhythm abnormalities</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Tic disorder &#40;e.g., Tourette&#41;</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>High blood pressure</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Intellectual disability</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Other:<input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="date" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
																<td>Eating disorder &#40;e.g.,anorexia&#41;</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td></td>
																<td></td>
																<td></td>
																<td> </td>
																<td></td>
																<td></td>
																<td></td>
																<td>Other:<input type="text" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
														</tbody>
													</table>



													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">I have
														confirmed with my child&rsquo;s ******* Care MD that his/*** immunizations are
														up **
														date.</span><span
															style="	fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																name="Check156" /><span
																	style="	fontapply">&nbsp;</span><strong><span
																		style="	fontapply">Yes&nbsp;</span></strong><input
															type="checkbox" name="Check156" /><span
																style="	fontapply">&nbsp;</span><strong><span
																	style="	fontapply">No</span></strong><span
																		style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">If no,
														explain:_______________________________________________________________________</span></strong>
													</p>
													<p style="margin-top:0pt; margin-right:36pt; margin-bottom:0pt; font-size:11pt;">
														<strong><span style="	fontapply">&nbsp;</span></strong>
													</p>
													<p style="margin-top:0pt; margin-right:36pt; margin-bottom:0pt; font-size:11pt;">
														<strong><span style="	fontapply">&nbsp;</span></strong>
													</p>
													<p style="margin-top:0pt; margin-right:36pt; margin-bottom:0pt;"><strong><span
														style="	fontapply">Specialized neurological or genetic
														tests:</span></strong></p>
													<p style="margin-top:0pt; margin-right:36pt; margin-bottom:0pt; font-size:11pt;">
														<strong><span style="	fontapply">&nbsp;</span></strong>
													</p>
													<p style="margin-top:0pt; margin-right:36pt; margin-bottom:0pt; font-size:11pt;"><input
														type="checkbox" name="Check55" /><span
															style="	fontapply">&nbsp;&nbsp;</span><span
																style="	fontapply">No neurological or genetic testing has
															been
															done</span></p>
													<p style="margin-top:0pt; margin-right:36pt; margin-bottom:0pt; font-size:11pt;">
														<strong>&nbsp;</strong>
													</p>



													<table className="table table-bordered">
														<thead className="thead-dark">
															<tr>
																<th scope="col">If done</th>
																<th scope="col">Date &#40;if known&#41; Month/Year</th>
																<th scope="col">Test</th>
																<th scope="col">Normal Result</th>
																<th scope="col">Abnormal Result</th>
																<th scope="col">Unknown Result</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>EEG &#40;brain wave test&#41;</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>CT scan</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>MRI scan</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>PET/SPECT/ scan</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>Other scan &#40;specify&#41;:<input type="text" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>Chromosomal microarray</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>Chromosomal analysis &#40;karyotype&#41;</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>DNA testing for fragile X syndrome</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
															<tr>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td><input type="name" className="form-control" /></td>
																<td>Other genetic test:<input type="text" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																</td>
															</tr>
														</tbody>
													</table>


													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><span
														style="	fontapply">List ***
														**************** and ********* for the client, include ********* stays
														&#40;medical
														or
														behavioral&#41;&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check55" /><span style="	fontapply">&nbsp;No past
															hospitalizations ** surgery</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>


													<table className="table table-bordered">
														<thead className="thead-dark">
															<tr>
																<th scope="col">Reason for hospitalization/surgery</th>
																<th scope="col-xs-2">Age</th>
																<th scope="col">Length of stay</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="6" size="6" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="6" size="6" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="pin" className="form-control" maxlength="6" size="6" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
														</tbody>
													</table>

													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><span
														style="	fontapply">Allergies&nbsp;</span></strong><span
															style="	fontapply">&#40;to medications, foods, environmental
															antigens, etc.&#41;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check55" /><span
															style="	fontapply">&nbsp;&nbsp;</span><span
																style="	fontapply">No
															past or current allergies</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>

													<table className="table table-bordered">
														<thead className="thead-dark">
															<tr>
																<th scope="col">Reason for hospitalization/surgery</th>
																<th scope="col">Nature of reaction &#40;hives, trouble breathing, etc.&#41;</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
															</tr>
														</tbody>
													</table>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><span
														style="	fontapply">Current
														Medications&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check55" /><span
															style="	fontapply">&nbsp;&nbsp;</span><span
																style="	fontapply">**
															medications taken&nbsp;</span><strong><span
																style="	fontapply">now</span></strong><span
																	style="width:20.27pt; display:inline-block;">&nbsp;</span><span
																		style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																			name="Check55" /><span
																				style="	fontapply">&nbsp;&nbsp;</span><span
																					style="	fontapply">Medications are being ***** now, *** the
															names are not known</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>


													<table className="table table-bordered">
														<thead className="thead-dark">
															<tr>
																<th scope="col">Medication</th>
																<th>Dosage</th>
																<th>Age at start</th>
																<th scope="col">Reason for medication</th>
																<th>Improved</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
																<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
																<td><input type="name" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		Y
																	</label>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		N
																	</label>
																</td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
																<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
																<td><input type="name" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		Y
																	</label>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		N
																	</label>
																</td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
																<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
																<td><input type="name" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		Y
																	</label>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		N
																	</label>
																</td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
																<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
																<td><input type="name" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		Y
																	</label>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		N
																	</label>
																</td>
															</tr>
															<tr>
																<td><input type="name" className="form-control" /></td>
																<td><input type="text" className="form-control" size="6" /></td>
																<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
																<td><input type="name" className="form-control" /></td>
																<td>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		Y
																	</label>
																	<input className="form-check-input" type="checkbox" id="gridCheck" />
																	<label className="form-check-label" for="Breath" id="gridLabel">
																		N
																	</label>
																</td>
															</tr>
														</tbody>
													</table>

													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">Name of person *********** the
														medications:
														_________________________________________________</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><u><span
														style="	fontapply">RESOURCES</span></u></strong><span
															style="	fontapply font-size:11pt;">: Please indicate
															resources/services being
															received&nbsp;</span><strong><span
																style="	fontapply font-size:11pt;">now</span></strong>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check55" /><strong><span
															style="	fontapply">&nbsp;</span></strong><span
																style="	fontapply">&nbsp;</span><span
																	style="	fontapply">No
															resources/services are ***** ******** now</span><strong><span
																style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check122" /><span style="	fontapply">&nbsp;Early
															Intervention Services
															&#40;Agency:______________________________&#41;</span><span
																style="width:24.56pt; display:inline-block;">&nbsp;</span><span
																	style="width:36pt; display:inline-block;">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check122" /><span
															style="	fontapply">&nbsp;Speech/Language
															therapy</span><span
																style="	fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																	name="Check122" /><span style="	fontapply">&nbsp;Psychiatry
																		services</span><span
																			style="	fontapply">&nbsp;&nbsp;&nbsp;</span><input
															type="checkbox" name="Check122" /><span
																style="	fontapply">&nbsp;Behavioral therapy</span><span
																	style="	fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																		name="Check122" /><span style="	fontapply">&nbsp;Group
																			therapy</span><span
																				style="	fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																					name="Check122" /><span style="	fontapply">&nbsp;********
																						therapy</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check122" /><span style="	fontapply">&nbsp;Occupational
															therapy</span><span
																style="	fontapply">&nbsp;&nbsp;&nbsp;</span><input
															type="checkbox" name="Check122" /><span
																style="	fontapply">&nbsp;Case management</span><span
																	style="	fontapply">&nbsp;&nbsp;&nbsp;</span><input
															type="checkbox" name="Check122" /><span
																style="	fontapply">&nbsp;Wraparound services
															&#40;WRAP&#41;</span><span
																style="	fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																	name="Check122" /><span style="	fontapply">&nbsp;Mobile
																		Therapist
																		&#40;MT&#41;</span><span style="	fontapply">&nbsp;&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><input type="checkbox"
														name="Check122" /><span style="	fontapply">&nbsp;Behavior
															Specialist Consultant &#40;BSC&#41;</span><span
																style="	fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																	name="Check122" /><span style="	fontapply">&nbsp;Therapeutic
																		Staff
																		Support &#40;TSS&#41;&nbsp;</span><input type="checkbox" name="Check122" /><span
																			style="	fontapply">&nbsp;Other:
															_______________________</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><u><span
														style="	fontapply">EDUCATIONAL
														HISTORY</span></u></strong><strong><span
															style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">******
														name:</span><span
															style="width:11.82pt; display:inline-block;">&nbsp;</span><u><span
																style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																	style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																		style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																			style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																				style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																					style="	fontapply">_______________</span></u><span
																						style="	fontapply">&nbsp;&nbsp;&nbsp;</span><span
																							style="	fontapply">Phone:</span><u><span
																								style="width:22.69pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;</span></u><u><span
																									style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																										style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																											style="width:36pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Grade in
														school:&nbsp;</span><u><span
															style="	fontapply">&nbsp;&nbsp;&nbsp;</span></u><u><span
																style="width:24.3pt; font-family:'Lucida Console'; display:inline-block;">&nbsp;&nbsp;&nbsp;</span></u><span
																	style="	fontapply">&nbsp;&nbsp;&nbsp;</span><span
																		style="	fontapply">&#40;ever repeat a grade?</span><span
																			style="	fontapply">&nbsp;&nbsp;</span><span
																				style="	fontapply">Yes /
															No&#41;</span><strong><span
																style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																	style="	fontapply">Teacher &#40;or best
															contact&#41;:&nbsp;</span><u><span
																style="	fontapply">&nbsp;</span></u><u><span
																	style="	fontapply">___________________</span></u><u><span
																		style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Is the
														client currently on a formal education plan in school?&nbsp;</span><input
															type="checkbox" name="Check156" /><span
																style="	fontapply">&nbsp;</span><strong><span
																	style="	fontapply">Yes&nbsp;</span></strong><input
															type="checkbox" name="Check156" /><span
																style="	fontapply">&nbsp;</span><strong><span
																	style="	fontapply">No</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">If yes,
														please check:&nbsp;</span><span
															style="width:16.07pt; display:inline-block;">&nbsp;</span><span
																style="	fontapply">□ IEP</span><span
																	style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
																		style="	fontapply">□ 504 Plan&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">What best
														********* the client&rsquo;s ******* educational program?</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Full ****
														in a regular className&nbsp;</span><span
															style="width:24.25pt; display:inline-block;">&nbsp;</span><span
																style="width:36pt; display:inline-block;">&nbsp;</span><span
																	style="width:36pt; display:inline-block;">&nbsp;</span><span
																		style="width:36pt; display:inline-block;">&nbsp;</span><span
																			style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																				name="Check140" /><span style="	fontapply">&nbsp;&nbsp;</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">****
														***** between regular and special education classes</span><span
															style="width:3.07pt; display:inline-block;">&nbsp;</span><span
																style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																	name="Check142" /><span style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Special
														education className</span><span
															style="width:5.98pt; display:inline-block;">&nbsp;</span><span
																style="width:36pt; display:inline-block;">&nbsp;</span><span
																	style="width:36pt; display:inline-block;">&nbsp;</span><span
																		style="width:36pt; display:inline-block;">&nbsp;</span><span
																			style="width:36pt; display:inline-block;">&nbsp;</span><span
																				style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																					name="Check143" /><span style="	fontapply">&nbsp;&nbsp;</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Aide/**************** or *****
														help</span><span style="width:23.92pt; display:inline-block;">&nbsp;</span><span
															style="width:36pt; display:inline-block;">&nbsp;</span><span
																style="width:36pt; display:inline-block;">&nbsp;</span><span
																	style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																		name="Check143" /><span style="	fontapply">&nbsp;&nbsp;</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">*********** school</span><span
															style="	fontapply">&nbsp;&nbsp;</span><span
																style="width:20.33pt; display:inline-block;">&nbsp;</span><span
																	style="width:36pt; display:inline-block;">&nbsp;</span><span
																		style="width:36pt; display:inline-block;">&nbsp;</span><span
																			style="width:36pt; display:inline-block;">&nbsp;</span><span
																				style="width:36pt; display:inline-block;">&nbsp;</span><span
																					style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																						name="Check144" /><span style="	fontapply">&nbsp;&nbsp;</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Home
														schooled&nbsp;</span><span
															style="width:0.52pt; display:inline-block;">&nbsp;</span><span
																style="width:36pt; display:inline-block;">&nbsp;</span><span
																	style="width:36pt; display:inline-block;">&nbsp;</span><span
																		style="width:36pt; display:inline-block;">&nbsp;</span><span
																			style="width:36pt; display:inline-block;">&nbsp;</span><span
																				style="width:36pt; display:inline-block;">&nbsp;</span><span
																					style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																						name="Check145" /></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><span
														style="	fontapply">Please indicate
														the educational program in which the ****** participated ****** his/her
														school*
														years:</span></strong>
													</p>
													<table cellpadding="0" cellspacing="0"
														style="width:542.4pt; border:1.5pt double #000000; border-collapse:collapse;">
														<tbody>
															<tr style="height:31.9pt;">
																<td
																	style="width:75.6pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:3pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span style="	fontapply">School
																			Year</span></strong></p>
																</td>
																<td colspan="2"
																	style="width:88.2pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:3pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong><strong><span
																				style="	fontapply">Type of
																				School</span></strong></p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">Regular</span><strong><span
																			style="	fontapply">*</span></strong><strong><span
																				style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																					style="	fontapply">Special</span></p>
																</td>
																<td colspan="2"
																	style="width:92.7pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:3pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;&nbsp;</span></strong><strong><span
																				style="	fontapply">Type of
																				Class</span></strong></p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">&nbsp;</span></p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">Regular*</span><strong><span
																			style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																				style="	fontapply">Special*</span></p>
																</td>
																<td colspan="3"
																	style="width:241.2pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:3pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><em><span
																		style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></em><em><span
																			style="	fontapply">Any Special
																			Services</span></em></p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">&nbsp;</span></p>
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">Yes&nbsp;</span><strong><span
																			style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																				style="	fontapply">No</span><span
																					style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><u><span
																						style="	fontapply">Type</span></u></p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:3pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">3-5 preschool</span></p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:3pt 0.75pt 0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:3pt 0.75pt 0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:3pt 0.75pt 0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:3pt 0.75pt 0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:3pt 0.75pt 0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:3pt 0.75pt 0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:3pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">Kindergarten</span></p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">1</span><span
																			style="	fontapply font-size:7.33pt;"><sup>st</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">2</span><span
																			style="	fontapply font-size:7.33pt;"><sup>nd</sup></span><span
																				style="	fontapply">&nbsp;</span></p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">3</span><span
																			style="	fontapply font-size:7.33pt;"><sup>rd</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">4</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">5</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">6</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">7</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">8</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">9</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">10</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">11</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span>
																	</p>
																</td>
																<td
																	style="width:34.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-style:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
															<tr>
																<td
																	style="width:75.6pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; padding-right:5.03pt; padding-left:4.65pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
																		style="	fontapply">12</span><span
																			style="	fontapply font-size:7.33pt;"><sup>th</sup></span><span
																				style="	fontapply">&nbsp;</span></p>
																</td>
																<td
																	style="width:34.2pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:38.7pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:43.2pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:16.2pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
																<td
																	style="width:187.2pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:4.65pt; padding-left:5.03pt; vertical-align:top;">
																	<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;">
																		<strong><span
																			style="	fontapply">&nbsp;</span></strong>
																	</p>
																</td>
															</tr>
														</tbody>
													</table>



													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">*
														REGULAR school applies to public or private schools for children without
														disabilities.</span></strong><strong><span
															style="	fontapply">&nbsp;&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;&nbsp;&nbsp;</span></strong><strong><span
															style="	fontapply">SPECIAL school applies to *** *******
															intended for ******** with
															disabilities</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">&nbsp;</span></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt;"><strong><u><span
														style="	fontapply">SOCIAL AND
														BEHAVIORAL FUNCTIONING</span></u></strong></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">Peer Relationships</span></strong>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">Please
														indicate how the client relates to peers:</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span style="	fontapply">&nbsp;Has problems
																relating ** other children</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span style="	fontapply">&nbsp;Has
																difficulty
																making friends</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span style="	fontapply">&nbsp;Fights
																frequently
																with peers</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span style="	fontapply">&nbsp;Prefers
																playing
																**** younger children&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;&nbsp;</span><span
															style="width:30.5pt; display:inline-block;">&nbsp;</span><input type="checkbox"
																name="Check140" /><span style="	fontapply">&nbsp;Prefers
																	playing
																	with older children</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span style="	fontapply">&nbsp;Prefers to
																play
																alone</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span style="	fontapply">&nbsp;Has a best
																friend</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">What role
														does the client take in peer groups?&nbsp;</span><input type="checkbox"
															name="Check140" /><span
																style="	fontapply">&nbsp;Leader</span><span
																	style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;</span><input
															type="checkbox" name="Check140" /><span
																style="	fontapply">&nbsp;Follower</span><span
																	style="	fontapply">&nbsp;&nbsp;&nbsp;&nbsp;</span><input
															type="checkbox" name="Check140" /><span
																style="	fontapply">&nbsp;Some of Each</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">How many
														friends does the client have? _________________________</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><strong><span
														style="	fontapply">Recreational
														Interests</span></strong>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">What does
														*** client enjoy?</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span
																style="	fontapply">&nbsp;Sports</span><span
																	style="	fontapply">&nbsp;&nbsp;</span><span
																		style="	fontapply">_________________________________________________________________________________</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; font-size:11pt;"><input
														type="checkbox" name="Check140" /><span
															style="	fontapply">&nbsp;Hobbies________________________________________________________________________________</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="width:36pt; display:inline-block;">&nbsp;</span><input type="checkbox"
															name="Check140" /><span
																style="	fontapply">&nbsp;Other</span><span
																	style="	fontapply">&nbsp;&nbsp;&nbsp;</span><span
																		style="	fontapply">_________________________________________________________________________________</span>
													</p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">**** are
														*** client&rsquo;s ******** strengths?</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">What do
														*** enjoy most about the client?</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">&nbsp;</span></p>
													<p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt;"><span
														style="	fontapply">What are
														your hopes *** the client&rsquo;s future?</span></p>

													<div className="col-12"></div>
													<div className="col-12">
														<button type="submit" className="btn btn-primary" formaction="aqtest.html">Next</button>
													</div>
												</div>
											</div>
										</div>
									</div>


								</div>
							</div>
						</div>
					</Container>
				</Box>
			</main>
		</div>
	);
};

export default MedicalHistory;
