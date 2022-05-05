package app.bootcamp.atm.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import app.bootcamp.atm.model.AccountUser;
import app.bootcamp.atm.repository.UserRepository;
import app.bootcamp.atm.service.PDFGeneratorService;

@Controller
public class PDFExportController {

	private final PDFGeneratorService pdfService;
	

	
	public PDFExportController(PDFGeneratorService pdfService) {
		this.pdfService = pdfService;
	}
	
	@GetMapping("/pdf")
	public void generatePDF(HttpServletResponse response) throws IOException {
		response.setContentType("application/pdf");
		
		String headerKey ="Content-Disposition";
		String headerValue = "attachment; filename=receipt.pdf";
		response.setHeader(headerKey, headerValue);
		
		
		this.pdfService.export(response);
}
	
	
}
