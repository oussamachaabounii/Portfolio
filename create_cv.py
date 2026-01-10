from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from datetime import datetime

# Create PDF
pdf_file = "Oussama_Chaabouni_CV.pdf"
doc = SimpleDocTemplate(pdf_file, pagesize=letter, topMargin=0.5*inch, bottomMargin=0.5*inch)
story = []
styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=colors.HexColor('#3b82f6'),
    spaceAfter=6,
    alignment=1
)

heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontSize=12,
    textColor=colors.HexColor('#3b82f6'),
    spaceAfter=6,
    spaceBefore=10,
    fontName='Helvetica-Bold'
)

normal_style = ParagraphStyle(
    'CustomNormal',
    parent=styles['Normal'],
    fontSize=10,
    spaceAfter=4
)

# Title
story.append(Paragraph("OUSSAMA CHAABOUNI", title_style))
story.append(Paragraph("Software Engineer | Cloud & .NET Specialist", styles['Normal']))
story.append(Paragraph("Barcelona, Spain | +34 605 136 382 | oussama.chaabouni@hotmail.com", styles['Normal']))
story.append(Spacer(1, 0.15*inch))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
story.append(Paragraph(
    "Experienced Software Engineer with 5+ years of expertise in building scalable microservices, implementing CI/CD pipelines, "
    "and architecting cloud-native solutions. Proficient in .NET Core, C#, Azure, and DevOps practices with a strong track record "
    "of delivering enterprise-level applications and improving system performance.",
    normal_style
))
story.append(Spacer(1, 0.1*inch))

# Experience
story.append(Paragraph("PROFESSIONAL EXPERIENCE", heading_style))

experiences = [
    {
        "title": "Software Engineer",
        "company": "EcoVadis",
        "location": "Barcelona, Spain",
        "period": "July 2023 - Present",
        "highlights": [
            "Developed and maintained microservices using .NET Core and Azure",
            "Implemented CI/CD pipelines using GitHub Actions reducing deployment time by 40%",
            "Led code reviews and mentored junior developers",
            "Optimized database queries improving application performance by 35%",
            "Designed scalable Kubernetes deployments on Azure"
        ]
    },
    {
        "title": "Junior Software Engineer / Scrum Master",
        "company": "EcoVadis",
        "location": "Tunisia",
        "period": "November 2021 - July 2023",
        "highlights": [
            "Built RESTful APIs using .NET Core framework",
            "Managed agile development processes and sprint planning",
            "Implemented Docker containerization for applications",
            "Contributed to Azure cloud infrastructure setup"
        ]
    },
    {
        "title": "Software Engineer Intern",
        "company": "Equalios",
        "location": "Tunisia",
        "period": "March 2021 - November 2021",
        "highlights": [
            "Developed web applications using C# and ASP.NET",
            "Participated in system architecture design",
            "Created comprehensive unit tests and documentation"
        ]
    },
    {
        "title": "Software Engineer Intern",
        "company": "Cognira",
        "location": "Tunisia",
        "period": "July 2020 - September 2020",
        "highlights": [
            "Worked on data processing applications",
            "Implemented API integrations"
        ]
    }
]

for exp in experiences:
    story.append(Paragraph(f"{exp['title']} | {exp['company']}", styles['Heading3']))
    story.append(Paragraph(f"{exp['period']} | {exp['location']}", ParagraphStyle(
        'Small', parent=styles['Normal'], fontSize=9, textColor=colors.grey
    )))
    for highlight in exp['highlights']:
        story.append(Paragraph(f"• {highlight}", normal_style))
    story.append(Spacer(1, 0.08*inch))

# Skills
story.append(Paragraph("TECHNICAL SKILLS", heading_style))
skills_data = [
    ["Languages & Frameworks", "C#, .NET Core, ASP.NET, TypeScript, React, JavaScript"],
    ["Cloud & DevOps", "Azure, Docker, Kubernetes, GitHub Actions, CI/CD"],
    ["Databases", "SQL Server, PostgreSQL, MongoDB, Redis"],
    ["Tools & Platforms", "Git, Jira, Azure DevOps, Visual Studio, VS Code"]
]

skills_table = Table(skills_data, colWidths=[2*inch, 3.5*inch])
skills_table.setStyle(TableStyle([
    ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
]))
story.append(skills_table)

# Build PDF
doc.build(story)
print(f"CV created successfully: {pdf_file}")
