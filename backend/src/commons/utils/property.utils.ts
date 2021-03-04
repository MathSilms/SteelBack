interface IFormartSexo {
  sexo: string;
}

interface IFormartRGAndCPF {
  cpf: string;
  rg: string;
}

interface IFormartedCPFAndRg {
  cpf: string | null;
  cpfOpcao?: string;
  rg: string | null;
  rgOpcao?: string;
}

interface IFormartCPF {
  cpf: string | number;
}

class PropertyUtils {
  formatCpf({ cpf }: IFormartCPF): string {
    return String(cpf).replace(/[^\d]+/g, '');
  }

  removeAcentos(value: string): string {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  formatCpfRg({ cpf, rg }: IFormartRGAndCPF): IFormartedCPFAndRg {
    const response: IFormartedCPFAndRg = {
      cpf: null,
      rg: null,
    };
    if (!cpf || String(cpf).toLowerCase() === 'não declarado') {
      response.cpfOpcao = 'Não Declarado';
    } else {
      response.cpf = String(cpf).replace(/[^\d]+/g, '');
    }
    if (!rg || String(rg).toLowerCase() === 'não declarado') {
      response.rgOpcao = 'Não Declarado';
    } else {
      response.rg = String(rg).replace(/[^\d]+/g, '');
    }
    return response;
  }

  formatSexo({ sexo }: IFormartSexo): string | undefined {
    if (sexo.toLowerCase() === 'masculino') {
      return 'M';
    }
    if (sexo.toLowerCase() === 'feminino') {
      return 'F';
    }
  }

  booleanConvert(value = ''): boolean | null {
    if (value.toLowerCase() === 'sim') {
      return true;
    }
    if (value.toLowerCase() === 'nao' || value.toLowerCase() === 'não') {
      return false;
    }
    return null;
  }
}

export default new PropertyUtils();
