/**
 * Help data displayed in the drawer when a field is tapped
 */
export interface HelpData {
    /** Title of the help content */
    title: string;
    /** Detailed explanation of the field's purpose and rules */
    explanation: string;
    /** Warning message for required fields or validation rules */
    warning?: string;
    /** Link to official source/PDF */
    officialSource: string;
}

/**
 * A single form field configuration
 */
export interface FormField {
    /** Unique identifier for the field */
    id: string;
    /** Label displayed above the field */
    label: string;
    /** Placeholder text inside the field */
    placeholder: string;
    /** Type of input (determines visual styling) */
    inputType: "text" | "select" | "date";
    /** Help content displayed when field is tapped */
    helpData: HelpData;
    /** Whether field is required */
    required?: boolean;
}

/**
 * A section of related form fields
 */
export interface FormSection {
    /** Unique identifier for the section */
    sectionId: string;
    /** Title displayed for the section */
    sectionTitle: string;
    /** Description of the section */
    description?: string;
    /** Fields within this section */
    fields: FormField[];
}

/**
 * Complete form configuration
 */
export interface FormConfig {
    /** Unique identifier for the form */
    formId: string;
    /** Title of the form */
    formTitle: string;
    /** Sections within the form */
    sections: FormSection[];
}
