package app.bootcamp.atm.service;

import java.io.IOException;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lowagie.text.Document;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

import app.bootcamp.atm.model.AccountUser;
import app.bootcamp.atm.repository.UserRepository;




@Service
public class PDFGeneratorService {

	public void export(HttpServletResponse response) throws IOException {
		Document document = new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		
		document.open();
		Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		fontTitle.setSize(24);
		
		Paragraph title = new Paragraph("ATM Transaction Record", fontTitle);
		title.setAlignment(Paragraph.ALIGN_CENTER);
		title.setSpacingAfter(72);

		
		Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
		fontParagraph.setSize(12);
		 
		
		
		Paragraph line1 = new Paragraph("Account No.:", fontParagraph);
		line1.setAlignment(Paragraph.ALIGN_LEFT);
		Paragraph line2 = new Paragraph("Current Balance:", fontParagraph);
		line2.setAlignment(Paragraph.ALIGN_LEFT);
		Paragraph line3 = new Paragraph("Available Balance:", fontParagraph);
		line3.setAlignment(Paragraph.ALIGN_LEFT);
		
		Paragraph footer = new Paragraph("Thank you for banking with us.", fontParagraph);
		footer.setAlignment(Paragraph.ALIGN_CENTER);
		footer.setSpacingBefore(240);
		
		document.add(title);
		document.add(line1);
		document.add(line2);
		document.add(line3);
		document.add(footer);
		document.close();
		
	}
}
