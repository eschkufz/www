import { IconButton, Link, Stack, ThemeProvider, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Citation, CITATIONS } from './citations';
import { Academic, TREE } from './genalogy';
import { ArrowDownIcon } from '@phosphor-icons/react';
import { theme } from './theme';

export function App() {
  return <ThemeProvider theme={theme}>
    <Page>
      <Genealogy tree={TREE}/>
      <Cites citations={CITATIONS}/>
    </Page>
  </ThemeProvider>;
}

type PageProps = {
  children: ReactNode;
};

function Page({children}: PageProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "center"}}>
    <Stack direction="column" sx={{width: "750px", alignItems: "left", gap: 3, paddingTop: 8}}>
      {children}
    </Stack>
  </Stack>;
}

type GenealogyProps = {
  tree: Academic;
};

function Genealogy({tree}: GenealogyProps) {
  const [academics, setAcademics] = useState<Academic[]>([tree]);
  const collapse = (i: number) => setAcademics(academics.slice(0, i));
  const expand = (i: number, parent: Academic) => setAcademics([...academics.slice(0, i+1), parent]);

  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
    {academics.map((academic, i)=><Individual key={`${academic.name}${i}`} academic={academic} activeParent={academics[i+1]} collapse={()=>collapse(i)} expand={(p)=>expand(i, p)}/>).reverse()}
  </Stack>;
}


type IndividualProps = {
  academic: Academic;
  activeParent?: Academic;
  collapse: ()=>void;
  expand: (parent: Academic)=>void;
};

function Individual(props: IndividualProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
    {props.academic.bio ? <IndividualLong {...props}/> : <IndividualBrief {...props}/>}
  </Stack>;
}

function IndividualLong(props: IndividualProps) {
  return <>
    <Stack direction="row" sx={{alignItems:"center", gap: 1}}>
      <Typography variant="h1">{props.academic.name}</Typography>
      <GenealogyButtons {...props}/>
      </Stack>
      <Typography variant="body1">{props.academic.bio}</Typography>
    </>;
}

function IndividualBrief(props: IndividualProps) {
  return <>
        <Stack direction="row" sx={{alignItems:"center", gap: 1}}>
          <IconButton onClick={props.collapse}><ArrowDownIcon/></IconButton>
      <Typography variant="h2">{props.academic.name}</Typography>
      <GenealogyButtons {...props}/>
      </Stack>
      <Stack direction="row" sx={{alignItems:"center", gap: 1}}>
      {props.academic.school && <Typography>{props.academic.school}</Typography>}
      {props.academic.grad && <Typography>{props.academic.grad}</Typography>}
      </Stack>
  </>;
}

function GenealogyButtons(props: IndividualProps) {
  const inactiveParents = props.academic.parents.filter((p)=>p.name !== props.activeParent?.name);
  return inactiveParents.length === 0 ? null : <Stack direction="row" sx={{alignItems:"center", gap: 1}}>
    <Typography variant="body2">{inactiveParents.length === props.academic.parents.length ? "advised by" : "also advised by"}</Typography>
  {inactiveParents.map((parent, i)=><GenealogyButton key={`${props.academic.name}${i}`} {...props} parent={parent} />)}
  </Stack>;
}

type GenealogyButtonProps = IndividualProps & {
  parent: Academic;
};

function GenealogyButton({activeParent, parent, collapse, expand}: GenealogyButtonProps) {
  return <Link variant="body2" onClick={() => activeParent?.name === parent.name ? collapse() : expand(parent)}>{parent.name}</Link>
}

type CiteProps = {
  citation: Citation;
};

function Cite({citation}: CiteProps) {
  const authors = citation.authors.map((author, i)=>i > 0 && i === citation.authors.length - 1 ? "and " + author : author).join(", ");
  return <Stack direction="column" sx={{width: "100%", alignItems: "left"}}>
    <Typography variant="h3">{citation.title}</Typography>
    <Typography variant="body2">{authors}</Typography>
    <Typography variant="body2">{citation.venue}</Typography>
  </Stack>;
}

type CitesProps = {
  citations: Citation[];
};

function Cites({citations}: CitesProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
    {citations.map((citation, i)=><Cite key={i} citation={citation}/>)}
  </Stack>
}