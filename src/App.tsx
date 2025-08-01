import { IconButton, Link, Stack, ThemeProvider, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Citation, CITATIONS } from './citations';
import { Academic, TREE } from './genalogy';
import { ArrowDownIcon, ArticleIcon } from '@phosphor-icons/react';
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
    <Stack direction="column" sx={{width: "750px", alignItems: "left", paddingTop: 8, gap: 2}}>
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

  return <>
    {academics.map((academic, i)=><Individual key={`${academic.name}${i}`} academic={academic} activeParent={academics[i+1]} collapse={()=>collapse(i)} expand={(p)=>expand(i, p)}/>).reverse()}
  </>;
}


type IndividualProps = {
  academic: Academic;
  activeParent?: Academic;
  collapse: ()=>void;
  expand: (parent: Academic)=>void;
};

function Individual(props: IndividualProps) {
  return props.academic.bio ? <IndividualLong {...props}/> : <IndividualBrief {...props}/>;
}

function IndividualLong(props: IndividualProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1, paddingTop: 2, paddingBottom: 4}}>
    <Stack direction="row" sx={{alignItems:"end", gap: 1}}>
      <Typography variant="h1" sx={{marginBottom: -0.9}}>{props.academic.name}</Typography>
      <GenealogyButtons {...props}/>
    </Stack>
    <Typography variant="body1">{props.academic.bio}</Typography>
    <DocLink label="Download my CV" path="cv.pdf"/>
  </Stack>;
}

function IndividualBrief(props: IndividualProps) {
  return <Stack direction="row" sx={{alignItems:"center", gap: 1}}>
          <IconButton onClick={props.collapse}><ArrowDownIcon/></IconButton>
          <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 0.5}}>
            <Stack direction="row" sx={{width: "100%", alignItems: "end", gap: 1}}>
              <Typography variant="h2" sx={{marginBottom: -0.2}}>{props.academic.name}</Typography>
              <GenealogyButtons {...props}/>
            </Stack>
            <Stack direction="row" sx={{alignItems:"center", gap: 0.5}}>
              {props.academic.school && <Typography variant="body2">{props.academic.school}</Typography>}
              {props.academic.grad && <Typography variant="body2">{props.academic.grad}</Typography>}
            </Stack>
          </Stack>
  </Stack>;
}

function GenealogyButtons(props: IndividualProps) {
  const inactiveParents = props.academic.parents.filter((p)=>p.name !== props.activeParent?.name);
  return inactiveParents.length === 0 ? null : <>
    <Typography variant="body2">{inactiveParents.length === props.academic.parents.length ? "advised by" : "also advised by"}</Typography>
  {inactiveParents.map((parent, i)=><GenealogyButton key={`${props.academic.name}${i}`} {...props} parent={parent} />)}
  </>;
}

type GenealogyButtonProps = IndividualProps & {
  parent: Academic;
};

function GenealogyButton({activeParent, parent, collapse, expand}: GenealogyButtonProps) {
  return <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={() => activeParent?.name === parent.name ? collapse() : expand(parent)}>{parent.name}</Link>
}

type CitesProps = {
  citations: Citation[];
};

function Cites({citations}: CitesProps) {
  return <>
    {citations.map((citation, i)=><Cite key={i} citation={citation}/>)}
  </>
}

type CiteProps = {
  citation: Citation;
};

function Cite({citation}: CiteProps) {
  const authors = citation.authors.map((author, i)=>i > 0 && i === citation.authors.length - 1 ? "and " + author : author).join(", ");
  return <Stack direction="row" sx={{width: "100%", alignItems: "begin", gap: 1}}>
    <ArticleIcon />
    <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 0.5, marginTop: -0.1}}>
      <Typography variant="h3">{citation.title}</Typography>
      <Typography variant="body2">{authors}</Typography>
      <Typography variant="body2">{citation.venue}</Typography>
      <Stack direction="row" sx={{width: "100%", alignItems: "center", gap: 0.5}}>
        {citation.bib && <DocLink label="bib" prefix="bib" path={citation.bib}/>}
        {citation.text && <DocLink label="pdf" prefix="text" path={citation.text}/>}
        {citation.deck && <DocLink label="deck" prefix="deck" path={citation.deck}/>}
        {citation.errata && <DocLink label="errata" prefix="errata" path={citation.errata}/>}
      </Stack>
    </Stack>
  </Stack>;
}

type DocLinkProps = {
  label: string;
  prefix?: string;
  path: string;
};

function DocLink({label, prefix, path}: DocLinkProps) {
  const uri = `${prefix ?? ""}${prefix ? "/" : ""}${path}`;
  const onClick = () => {
    window.location.href = path.substring(0, 4) === "http" ? path : uri;
  }
  return <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={onClick}>{label}</Link>
}