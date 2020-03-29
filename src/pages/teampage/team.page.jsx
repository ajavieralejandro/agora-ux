import React, { useEffect } from "react";
import { Spinner } from "../../components/withSpinner/with-spinner.component";
import { setTeam, fetchTeam } from "../../redux/collections/collection.actions";
import Member from "../../components/member/member.component";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import "./team.styles.scss";

const TeamPage = ({ team, fetchTeam, loading }) => {
  //Analogo a componentDidMount
  useEffect(() => {
    console.log("Loading es : ", loading);
    if (team.length === 0) fetchTeam();
  }, []);

  useEffect(() => {
    console.log("Las diferencias : ");
    console.log("team ahora es : ", team);
    if (team) team.forEach(member => console.log("miembro : ", member));
  }, [loading]);

  return (
    <div>
      <div className="team-wrap">
        <Container fixed>
          <h1>Nuestro Equipo </h1>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {!loading ? (
              team.map(member => (
                <Grid item md={3}>
                  <Member teamMember={member} />
                </Grid>
              ))
            ) : (
              <Spinner />
            )}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  team: state.team.team,
  loading: state.team.loading
});

const mapDispatchToProps = dispatch => ({
  setTeam: team => dispatch(setTeam(team)),
  fetchTeam: () => dispatch(fetchTeam())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
